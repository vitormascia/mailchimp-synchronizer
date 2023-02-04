import { contactsService } from "../use-cases/index.js";
export default Object.freeze({
    syncContacts: (_httpRequest) => contactsService.syncContacts(),
});
//# sourceMappingURL=controllers.contacts.js.map