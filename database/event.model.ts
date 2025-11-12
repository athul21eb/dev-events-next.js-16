import { Schema, model, models, Document, HydratedDocument } from "mongoose";

export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    slug: {
      type: String,
    
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    overview: {
      type: String,
      required: [true, "Overview is required"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    venue: {
      type: String,
      required: [true, "Venue is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    date: {
      type: String,
      required: [true, "Date is required"],
    },
    time: {
      type: String,
      required: [true, "Time is required"],
    },
    mode: {
      type: String,
      required: [true, "Mode is required"],
      enum: {
        values: ["online", "offline", "hybrid"],
        message: "Mode must be online, offline, or hybrid",
      },
    },
    audience: {
      type: String,
      required: [true, "Audience is required"],
      trim: true,
    },
    agenda: {
      type: [String],
      required: [true, "Agenda is required"],
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: "Agenda must contain at least one item",
      },
    },
    organizer: {
      type: String,
      required: [true, "Organizer is required"],
      trim: true,
    },
    tags: {
      type: [String],
      required: [true, "Tags are required"],
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: "Tags must contain at least one item",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook: Generate slug from title and normalize date/time
EventSchema.pre("save", function (this: HydratedDocument<IEvent>, next) {
  // Generate slug only if title is modified or new document
  if (this.isModified("title")) {
    const baseSlug = this.title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  // Only modify slug for new documents or when explicitly changing title
  if (this.isNew) {
    this.slug = `${baseSlug}-${Date.now()}`;
  } else {
    this.slug = baseSlug;
  }
  }

  // Normalize date to ISO format (YYYY-MM-DD)
  if (this.isModified("date")) {
    // Parse date without time to avoid timezone shifts
    const dateMatch = this.date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!dateMatch) {
      return next(new Error("Invalid date format. Use YYYY-MM-DD"));
    }
    const [, year, month, day] = dateMatch;
    const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
    if (isNaN(dateObj.getTime())) {
      return next(new Error("Invalid date format"));
    }
    // Format without timezone conversion
    this.date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }

  // Normalize time to HH:MM format
   if (this.isModified("time")) {
    const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(this.time)) {
      return next(new Error("Invalid time format. Use HH:MM format"));
    }
  }

  next();
});

// Create unique index on slug for faster lookups
EventSchema.index({ slug: 1 }, { unique: true });

const Event = models.Event || model<IEvent>("Event", EventSchema);

export default Event;
