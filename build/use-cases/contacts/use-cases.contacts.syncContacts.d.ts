import { IBuildSyncContacts, ISyncContactsResponse } from "../../ts/index.js";
declare function buildSyncContacts({ trioClient, mailchimpClient, }: IBuildSyncContacts): () => Promise<ISyncContactsResponse>;
export default buildSyncContacts;
