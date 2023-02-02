import "express-async-errors";

import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import helmet from "helmet";

import { errorHandler } from "../../middlewares/index.js";
import { router } from "../../routes/index.js";
import { config } from "../config/index.js";
import { logger } from "../log/index.js";

const { APP } = config;

const app = express();

app
  .use(bodyParser.json())
  .use(express.json({ limit: "50mb" }))
  .use(helmet())
  .use(cors())
  .get("/health", (_req: Request, res: Response): Response => res.json({ ok: true }))
  .use(router)
  .use(errorHandler)
  .listen(APP.PORT, function (): void {
    try {
      logger.info("ENTRY_POINT_RUNNING", {
        data: {
          name: "API",
          port: APP.PORT,
        },
      });
    } catch (error: any) {
      logger.error("ENTRY_POINT_ERROR", {
        data: {
          name: "API",
          port: APP.PORT,
          error: {
            message: error.message,
            stack: error.stack,
          },
        },
      });

      process.exit(1);
    }
  });
