import dotenv from "dotenv";
dotenv.config();
import app, { startApp } from "./app";

startApp().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.BASE_URL}:${PORT}`);
  });
});
