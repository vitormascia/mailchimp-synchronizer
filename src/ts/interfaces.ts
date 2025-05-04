import { ParamsDictionary, Query } from "express-serve-static-core";
import { IncomingHttpHeaders } from "http";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";

import { MailchimpClient, TrioClient } from "../clients/index.js";
import { CaseConverter } from "../helpers/index.js";
import { HttpMethod, ISO3166CountryCode, Language, Visibility } from "./enums.js";
import { AnyObject, Contact, EmptyObject, Modify } from "./types.js";

interface Config {
    APP: {
        PORT: number;
        NAME: string;
        ENVIRONMENT: string;
    };
    MAILCHIMP: {
        SERVER_PREFIX: string;
        AUDIENCE_ID: string;
        API: {
            KEY: string;
        };
    };
    TRIO: {
        API: {
            BASE_URL: string;
        };
    };
}

interface Logger<TLogger, TCreateReturn> {
    logger: TLogger;

    create(): TCreateReturn;
}

interface JoiBaseSchema {
    body: Joi.ObjectSchema;
    path: Joi.ObjectSchema;
    query: Joi.ObjectSchema;
}

interface RequestParams {
    body: any;
    path: ParamsDictionary;
    query: Query;
}

interface HttpRequest extends RequestParams {
    method: string;
    url: {
        protocol: string;
        host: string;
        endpoint: string;
    };
    source: {
        ip: string;
        userAgent: string;
    };
    headers: IncomingHttpHeaders;
}

interface HttpResponse {
    statusCode: StatusCodes;
    data: AnyObject | EmptyObject;
}

type PingRequest = Modify<HttpRequest, { body: EmptyObject; }>;

type PingResponse = Modify<HttpResponse, {
    data: {
        ok: true;
    };
}>;

type PingMailchimpRequest = Modify<HttpRequest, {
    body: EmptyObject;
}>

interface MailchimpHealthCheck {
    healthStatus: string;
}

type PingMailchimpResponse = Modify<HttpResponse, {
    data: {
        mailchimpHealthCheck: MailchimpHealthCheck;
    };
}>;

type SyncContactsRequest = Modify<HttpRequest, {
    body: EmptyObject;
}>;

type SyncContactsResponse = Modify<HttpResponse, {
    data: {
        syncedContacts: number;
        contacts: Contact[];
    };
}>;

interface UpdateAudienceRequestPath {
    [audienceId: string]: string;
}

interface UpdateAudienceRequestBody {
    name: string;
    contact: {
        address1: string;
        address2?: string;
        country: ISO3166CountryCode;
        zip: string;
        state: string;
        city: string;
        phone?: string;
        company: string;
    };
    permissionReminder: string;
    campaignDefaults: {
        fromName: string;
        fromEmail: string;
        subject: string;
        language: Language;
    };
    emailTypeOption: boolean;
    useArchiveBar?: boolean;
    notifyOnSubscribe?: string;
    notifyOnUnsubscribe?: string;
    doubleOptin?: boolean;
    marketingPermissions?: boolean;
}

type UpdateAudienceRequest = Modify<HttpRequest, {
    body: UpdateAudienceRequestBody;
    path: UpdateAudienceRequestPath;
}>;

interface UpdatedAudience {
    id: string;
    webId: number;
    name: string;
    contact: {
        company: string;
        address1: string;
        address2: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        phone: string;
    };
    permissionReminder: string;
    useArchiveBar: boolean;
    campaignDefaults: {
        fromName: string;
        fromEmail: string;
        subject: string;
        language: string;
    };
    notifyOnSubscribe: boolean;
    notifyOnUnsubscribe: boolean;
    dateCreated: string;
    listRating: number;
    emailTypeOption: boolean;
    subscribeUrlShort: string;
    subscribeUrlLong: string;
    beamerAddress: string;
    visibility: Visibility;
    doubleOptin: boolean;
    hasWelcome: boolean;
    marketingPermissions: boolean;
    modules: string[];
    stats: {
        memberCount: number;
        totalContacts: number;
        unsubscribeCount: number;
        cleanedCount: number;
        memberCountSinceSend: number;
        unsubscribeCountSinceSend: number;
        cleanedCountSinceSend: number;
        campaignCount: number;
        campaignLastSent: string;
        mergeFieldCount: number;
        avgSubRate: number;
        avgUnsubRate: number;
        targetSubRate: number;
        openRate: number;
        clickRate: number;
        lastSubDate: string;
        lastUnsubDate: string;
    };
    _links: {
        rel: string;
        href: string;
        method: HttpMethod;
        targetSchema?: string;
        schema?: string;
    }[];
}

type UpdateAudienceResponse = Modify<HttpResponse, {
    data: {
        updatedAudience: UpdatedAudience;
    };
}>;

interface Client<TConfig, TClient> {
    config: TConfig;
    client: TClient;
}

interface TrioContact {
    createdAt: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    id: string;
}

interface BuildPingMailchimp {
    mailchimpClient: MailchimpClient;
}

interface BuildSyncContacts {
    trioClient: TrioClient;
    mailchimpClient: MailchimpClient;
}

interface BuildUpdateAudience {
    caseConverter: CaseConverter;
    mailchimpClient: MailchimpClient;
}

export {
    BuildPingMailchimp,
    BuildSyncContacts,
    BuildUpdateAudience,
    Client,
    Config,
    HttpRequest,
    HttpResponse,
    JoiBaseSchema,
    Logger,
    MailchimpHealthCheck,
    PingMailchimpRequest,
    PingMailchimpResponse,
    PingRequest,
    PingResponse,
    RequestParams,
    SyncContactsRequest,
    SyncContactsResponse,
    TrioContact,
    UpdateAudienceRequest,
    UpdateAudienceRequestBody,
    UpdateAudienceRequestPath,
    UpdateAudienceResponse,
    UpdatedAudience,
};
