declare const syncContacts: () => Promise<import("../../ts/interfaces.js").SyncContactsResponse>;
declare const contactsService: Readonly<{
    syncContacts: () => Promise<import("../../ts/interfaces.js").SyncContactsResponse>;
}>;
export default contactsService;
export { syncContacts };
