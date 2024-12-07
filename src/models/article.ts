import { Schema, model } from "mongoose";
import { ArticleType } from "../types";

// Define the schema
const ArticleSchema = new Schema<ArticleType>({
  title: { type: String, required: true },
  description: { type: String },
  publicationDate: { type: Date, required: true },
  sourceUrl: { type: String, required: true },
  topics: { type: [String], default: [] },
  entities: {
    people: { type: [String], default: [] },
    locations: { type: [String], default: [] },
    organizations: { type: [String], default: [] },
  },
});

export const Article = model<ArticleType>("Article", ArticleSchema);
