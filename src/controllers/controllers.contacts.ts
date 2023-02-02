import { IHttpRequest } from "../ts/index.js";
import { contactsService } from "../use-cases/index.js";

export default Object.freeze({
  syncContacts: (httpRequest: IHttpRequest) => contactsService.syncContacts(httpRequest),
});
