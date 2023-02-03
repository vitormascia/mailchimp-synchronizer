import express from "express";

import { healthChecksController } from "../controllers/index.js";
import { buildCallback } from "../middlewares/index.js";

const healthChecksRoutes = express
    .Router()
    .get("", buildCallback(healthChecksController.ping))
    .get("/mailchimp", buildCallback(healthChecksController.pingMailchimp));

export default healthChecksRoutes;
