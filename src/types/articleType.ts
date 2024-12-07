import { Document } from "mongoose";

export interface ArticleType extends Document {
  title: string;
  description?: string;
  publicationDate: Date;
  sourceUrl: string;
  topics: string[];
  entities: {
    people: string[];
    locations: string[];
    organizations: string[];
  };
}