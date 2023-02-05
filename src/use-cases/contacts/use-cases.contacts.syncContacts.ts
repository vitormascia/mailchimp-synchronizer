import { StatusCodes } from "http-status-codes";
import _ from "lodash";

import { config } from "../../app/index.js";
import { IBuildSyncContacts, ISyncContactsResponse, Language, MemberStatus } from "../../ts/index.js";

const { MAILCHIMP } = config;

function buildSyncContacts({
    trioClient,
    mailchimpClient,
}: IBuildSyncContacts) {
    return async function syncContacts(): Promise<ISyncContactsResponse> {
        const trioContacts = await trioClient.getContacts();

        await mailchimpClient.batchAudienceMembers(
            MAILCHIMP.AUDIENCE_ID,
            {
                members: trioContacts.map((trioContact) => {
                    return {
                        email_address: trioContact.email,
                        status: MemberStatus.Subscribed,
                        language: Language.English,
                        merge_fields: {
                            FNAME: trioContact.firstName,
                            LNAME: trioContact.lastName,
                        },
                    };
                }),
            },
        );

        const contacts = trioContacts.map((trioContact) => {
            return _.pick(trioContact, [
                "firstName",
                "lastName",
                "email",
            ]);
        });

        return {
            statusCode: StatusCodes.CREATED,
            data: {
                syncedContacts: contacts.length,
                contacts,
            },
        };
    };
}

export default buildSyncContacts;
