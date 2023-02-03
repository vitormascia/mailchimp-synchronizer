import { ISyncContactsRequest } from "../ts/index.js";
import { contactsService } from "../use-cases/index.js";

export default Object.freeze({
    syncContacts: (httpRequest: ISyncContactsRequest) => contactsService.syncContacts(httpRequest),
});
