import express from "express";

import { audiencesController } from "../controllers/index.js";
import { pathParams, updateAudienceSchema } from "../helpers/index.js";
import { bouncer, buildCallback } from "../middlewares/index.js";

const { audienceId } = pathParams;

const audiencesRoutes = express
    .Router()
    .patch(`/${audienceId}`, bouncer(updateAudienceSchema), buildCallback(audiencesController.updateAudience));

export default audiencesRoutes;
