import express from "express";

import audiencesRoutes from "./routes.audiences.js";
import contactsRoutes from "./routes.contacts.js";

const router = express.Router();

router.use("/audiences", audiencesRoutes);
router.use("/contacts", contactsRoutes);

export default router;
