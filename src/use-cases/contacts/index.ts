import { mailchimpClient, trioClient } from "../../clients/index.js";
import buildSyncContacts from "./use-cases.contacts.syncContacts.js";

const syncContacts = buildSyncContacts({
    trioClient,
    mailchimpClient,
});

const contactsService = Object.freeze({
    syncContacts,
});

export default contactsService;
export { syncContacts };
