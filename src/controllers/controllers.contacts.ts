import { ISyncContactsRequest, ISyncContactsResponse } from "../ts/index.js";
import { contactsService } from "../use-cases/index.js";

export default Object.freeze({
    syncContacts: (_httpRequest: ISyncContactsRequest): Promise<ISyncContactsResponse> => contactsService.syncContacts(),
});
