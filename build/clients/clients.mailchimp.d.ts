import { IBatchListMembersOptions, IBatchListMembersRequest, IBatchListMembersResponse, IMailchimpConfig, IPingResponse, IUpdateListRequest, IUpdateListResponse } from "@mailchimp/mailchimp_marketing";
import { Client, MailchimpClient as TMailchimpClient } from "../ts/index.js";
declare class MailchimpClient implements Client<IMailchimpConfig, TMailchimpClient> {
    readonly config: IMailchimpConfig;
    readonly client: TMailchimpClient;
    constructor();
    private logSuccess;
    private logError;
    ping(): Promise<IPingResponse>;
    batchAudienceMembers(audienceId: string, request: IBatchListMembersRequest, options?: IBatchListMembersOptions): Promise<IBatchListMembersResponse>;
    updateAudience(audienceId: string, request: IUpdateListRequest): Promise<IUpdateListResponse>;
}
declare const mailchimpClient: MailchimpClient;
export default mailchimpClient;
export { MailchimpClient };
