import { Schema, model, models, Document, Types, HydratedDocument } from "mongoose";
import Event from "./event.model";

export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "Event ID is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook: Verify that the referenced event exists
BookingSchema.pre("save", async function (this: HydratedDocument<IBooking>, next) {
  if (this.isModified("eventId")) {
    try {
      const eventExists = await Event.findById(this.eventId);
      if (!eventExists) {
        return next(new Error("Referenced event does not exist"));
      }
    } catch (error) {
      return next(error instanceof Error ? error : new Error("Failed to validate event reference"));
     }
  }

  next();
});

// Create unique compound index to prevent duplicate bookings (eventId + email)
BookingSchema.index({ eventId: 1, email: 1 }, { unique: true });

const Booking = models.Booking || model<IBooking>("Booking", BookingSchema);

export default Booking;
