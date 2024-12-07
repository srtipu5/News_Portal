import { Router } from "express";
import { fetchNews, getFilteredNews } from "../controllers/newsController";

const router = Router();

router.get("/fetch", fetchNews);
router.get("/filter", getFilteredNews);

export default router;
