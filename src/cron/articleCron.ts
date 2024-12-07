import cron from 'node-cron';
import { fetchAndStoreArticles } from '../services/newsService';
import { feedUrls } from '../config/feedsUrl';


export const articleCron = async () => {
  cron.schedule('* * * * *', async () => {
    console.log('Fetching new articles...');
    await fetchAndStoreArticles(feedUrls[0]);
  });  
}

