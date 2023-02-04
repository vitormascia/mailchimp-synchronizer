import express from "express";
import audiencesRoutes from "./routes.audiences.js";
import contactsRoutes from "./routes.contacts.js";
import healthChecksRoutes from "./routes.healthChecks.js";
const router = express.Router();
router.use("/audiences", audiencesRoutes);
router.use("/contacts", contactsRoutes);
router.use("/health-checks", healthChecksRoutes);
export default router;
//# sourceMappingURL=routes.router.js.map