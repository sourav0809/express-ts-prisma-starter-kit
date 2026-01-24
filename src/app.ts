import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { requestLogger, notFound } from "./middlewares/common.middleware";
import { errorHandler } from "./middlewares/error.middleware";

export const createApp = (): Application => {
  const app = express();

  // Pre-route middlewares
  app.use(helmet()); // Security headers
  app.use(cors()); // Enable CORS
  app.use(compression()); // Compress responses
  app.use(express.json()); // Parse JSON bodies
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

  // Health check route
  app.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy ! Thank you for checking" });
  });

  // Add your routes here
  // app.use('/api/v1/auth', authRouter);
  // app.use('/api/v1/users', userRouter);

  // Post-route middlewares
  app.use(notFound); // Handle 404s
  app.use(errorHandler); // Global error handler

  return app;
};
