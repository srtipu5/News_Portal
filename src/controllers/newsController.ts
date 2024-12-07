import { Request, Response } from "express";
import { ArticleRepository } from "../repositories";
import { fetchAndStoreArticles } from "../services/newsService";
import { feedUrls } from "../config/feedsUrl";
// import { fetchRSSFeed } from "../services/newsService";
// import { fetchAndProcessNews } from "../services/newsService";


export const fetchNews = async (req: Request, res: Response) => {
  try {
    const data = await fetchAndStoreArticles(feedUrls[0])
    res.status(200).send({data, message: "News fetched and processed successfully." });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

export const getFilteredNews = async (req: Request, res: Response) => {
  try {
    const articles = await ArticleRepository.filter(req.query);
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).send({ error: "Error fetching filtered news." });
  }
};
