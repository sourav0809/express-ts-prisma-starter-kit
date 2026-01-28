import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { notFound } from "./middlewares/common.middleware";
import { errorHandler } from "./middlewares/error.middleware";

export const createApp = (): Application => {
  const app = express();

  // Pre-route middlewares
  app.use(helmet()); // Security headers
  app.use(cors({
    origin: ["*"],
    credentials: true,
  })); // Enable CORS
  app.use(compression()); // Compress responses
  app.use(express.json()); // Parse JSON bodies
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

  // Health check route
  app.get("/health", (_, res) => {
    res.status(200).json({ status: "healthy ! Thank you for checking" });
  });


  app.use(notFound);
  app.use(errorHandler);

  return app;
};
