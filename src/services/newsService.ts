import RSSParser from "rss-parser";
import { Article } from "../models";

const parser = new RSSParser();

export async function fetchAndStoreArticles(url: string) {
  try {
    const feed = await parser.parseURL(url);
    for (const item of feed.items) {
      const {
        creator,
        title,
        link,
        pubDate,
        content,
        contentSnippet,
        isoDate,
        categories,
      } = item;

      const article = new Article({
        creator,
        title,
        link,
        pubDate,
        content,
        contentSnippet,
        isoDate,
        categories,
      });

      await article.save();
    }
  } catch (error) {
    console.error("Error fetching and storing articles:", error);
  }
}
