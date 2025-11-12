"use server";

import { Event } from "@/database";

export const getSimilarEventsBySlug = async (slug: string) => {
  try {
    const event = await Event.findOne({ slug });
    return await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean();
  } catch (e) {
    console.log(e);
    return [];
  }
};
