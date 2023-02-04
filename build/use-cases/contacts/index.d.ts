declare const syncContacts: () => Promise<import("../../ts/interfaces.js").ISyncContactsResponse>;
declare const contactsService: Readonly<{
    syncContacts: () => Promise<import("../../ts/interfaces.js").ISyncContactsResponse>;
}>;
export default contactsService;
export { syncContacts };
