import { BuildSyncContacts, SyncContactsResponse } from "../../ts/index.js";
declare function buildSyncContacts({ trioClient, mailchimpClient, }: BuildSyncContacts): () => Promise<SyncContactsResponse>;
export default buildSyncContacts;
