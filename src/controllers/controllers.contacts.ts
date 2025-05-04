import { SyncContactsRequest, SyncContactsResponse } from "../ts/index.js";
import { contactsService } from "../use-cases/index.js";

export default Object.freeze({
    syncContacts: (_httpRequest: SyncContactsRequest): Promise<SyncContactsResponse> => contactsService.syncContacts(),
});
