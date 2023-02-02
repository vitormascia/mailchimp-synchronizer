import buildSyncContacts from "./use-cases.contacts.syncContacts.js";

const syncContacts = buildSyncContacts();

const contactsService = Object.freeze({
  syncContacts,
});

export default contactsService;
export { syncContacts };
