import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.status(201).json({
    msg: "The server is running fine",
  });
});

router.get("/monitor", (req, res) => {
  const memory = process.memoryUsage;
  const uptime = process.uptime;
  res.json({
    memory,
    uptime,
  });
});

export default router;
