import { articleCron } from "./articleCron";


export const cronJob = async () => {
   await articleCron();
  }