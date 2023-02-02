import express from "express";

import { audiencesController } from "../controllers/index.js";
import { createAudienceSchema } from "../helpers/index.js";
import { bouncer, buildCallback } from "../middlewares/index.js";

const audiencesRoutes = express
  .Router()
  .post("", bouncer(createAudienceSchema), buildCallback(audiencesController.createAudience));

export default audiencesRoutes;
