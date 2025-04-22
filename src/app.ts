import express from "express";
import cors from "cors";
import plantRoutes from "./routes/plantRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/plant", plantRoutes);

export default app;
