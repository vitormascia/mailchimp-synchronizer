import express from "express";
import { contactsController } from "../controllers/index.js";
import { buildCallback } from "../middlewares/index.js";
const contactsRoutes = express
    .Router()
    .get("/sync", buildCallback(contactsController.syncContacts));
export default contactsRoutes;
//# sourceMappingURL=routes.contacts.js.map