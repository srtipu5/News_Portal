import { Article } from "../models";
import { FilterQuery } from "mongoose";
import { ArticleType } from "../types";

export class ArticleRepository {
  /**
   * Save a new article to the database.
   * @param articleData - Data for the new article.
   * @returns The saved article document.
   */
  static async save(articleData: Partial<ArticleType>): Promise<ArticleType> {
    const article = new Article(articleData);
    return await article.save();
  }

  /**
   * Filter articles based on a query.
   * @param query - MongoDB filter query.
   * @returns An array of articles matching the query.
   */
  static async filter(query: FilterQuery<ArticleType>): Promise<ArticleType[]> {
    return await Article.find(query);
  }
}
