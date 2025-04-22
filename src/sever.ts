import app from "./app";
import { connectDB } from "./config/db";

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port} `);
    });
  })
  .catch((err) => {
    console.error("There is an error while connecting the db");
  });
