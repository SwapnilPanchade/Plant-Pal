import express from "express";
import cors from "cors";
import plantRouter from "./routes/plantRoutes";
import healthRouter from "./routes/healthRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/plant", plantRouter);
app.use("/api/v1", healthRouter);

export default app;
