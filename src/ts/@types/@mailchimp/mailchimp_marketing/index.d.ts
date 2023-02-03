/* eslint-disable @typescript-eslint/no-empty-function */
declare module "@mailchimp/mailchimp_marketing" {
    import { ReasonPhrases, StatusCodes } from "http-status-codes";

    import { EmailType, ErrorCode, HttpMethod, Language, MemberStatus, Visibility } from "../../../../ts/index.js";

    export interface IMailchimpConfig {
        apiKey: string;
        server: string;
    }

    export interface IMailchimpError {
        type: string;
        title: ReasonPhrases;
        status: StatusCodes;
        detail: string;
        instance: string;
    }

    export interface IPingResponse {
        health_status: string;
    }

    export interface IUpdateListRequest {
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
        permission_reminder: string;
        campaign_defaults: {
            from_name: string;
            from_email: string;
            subject: string;
            language: Language;
        };
        email_type_option: boolean;
        use_archive_bar?: boolean;
        notify_on_subscribe?: string;
        notify_on_unsubscribe?: string;
        double_optin?: boolean;
        marketing_permissions?: boolean;
    }

    export interface IUpdateListResponse {
        id: string;
        web_id: number;
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
        },
        permission_reminder: string;
        use_archive_bar: false,
        campaign_defaults: {
            from_name: string;
            from_email: string;
            subject: string;
            language: string;
        },
        notify_on_subscribe: false,
        notify_on_unsubscribe: false,
        date_created: string;
        list_rating: number;
        email_type_option: true,
        subscribe_url_short: string;
        subscribe_url_long: string;
        beamer_address: string;
        visibility: Visibility;
        double_optin: false,
        has_welcome: false,
        marketing_permissions: false,
        modules: string[];
        stats: {
            member_count: number;
            total_contacts: number;
            unsubscribe_count: number;
            cleaned_count: number;
            member_count_since_send: number;
            unsubscribe_count_since_send: number;
            cleaned_count_since_send: number;
            campaign_count: number;
            campaign_last_sent: string;
            merge_field_count: number;
            avg_sub_rate: number;
            avg_unsub_rate: number;
            target_sub_rate: number;
            open_rate: number;
            click_rate: number;
            last_sub_date: string;
            last_unsub_date: string;
        },
        _links: {
            rel: string;
            href: string;
            method: HttpMethod;
            targetSchema?: string;
            schema?: string;
        }[],
    }

    export interface IBatchListMembersRequest {
        members: {
            email_address: string;
            status: MemberStatus;
            language: Language;
            merge_fields: {
                FNAME: string;
                LNAME: string;
            }
        }[]
    }

    export interface IBatchListMembersOptions {
        skip_merge_validation: boolean = false;
        skip_duplicate_check: boolean = false;
    }

    export interface IBatchListMembersResponse {
        new_members: {
            id: string;
            email_address: string;
            unique_email_id: string;
            email_type: EmailType;
            status: MemberStatus,
            merge_fields: {
                FNAME: string;
                LNAME: string;
                ADDRESS: string;
                PHONE: string;
                BIRTHDAY: string;
            },
            stats: {
                avg_open_rate: number;
                avg_click_rate: number;
            },
            ip_signup: string;
            timestamp_signup: string;
            ip_opt: string;
            timestamp_opt: string;
            member_rating: number;
            last_changed: string;
            language: Language,
            vip: boolean;
            email_client: string;
            location: {
                latitude: number;
                longitude: number;
                gmtoff: number;
                dstoff: number;
                country_code: string;
                timezone: string;
            },
            tags_count: number;
            tags: {
                id: number;
                name: string;
            }[],
            list_id: string;
            _links: {
                rel: string;
                href: string;
                method: HttpMethod;
                targetSchema?: string;
                schema?: string;
            }[],
        }[],
        updated_members: {
            id: string;
            email_address: string;
            unique_email_id: string;
            email_type: EmailType,
            status: MemberStatus,
            merge_fields: {
                FNAME: string;
                LNAME: string;
                ADDRESS: string;
                PHONE: string;
                BIRTHDAY: string;
            },
            stats: {
                avg_open_rate: number;
                avg_click_rate: number;
            },
            ip_signup: string;
            timestamp_signup: string;
            ip_opt: string;
            timestamp_opt: string;
            member_rating: number;
            last_changed: string;
            language: string;
            vip: true,
            email_client: string;
            location: {
                latitude: number;
                longitude: number;
                gmtoff: number;
                dstoff: number;
                country_code: string;
                timezone: string;
            },
            last_note: {
                note_id: number;
                created_at: string;
                created_by: string;
                note: string;
            },
            tags_count: number;
            tags: {
                id: number;
                name: string;
            }[],
            list_id: string;
            _links: {
                rel: string;
                href: string;
                method: HttpMethod;
                targetSchema?: string;
                schema?: string;
            }[],
        }[],
        errors: {
            email_address: string;
            error: string;
            error_code: ErrorCode,
            field: string;
            field_message: string;
        }[],
        total_created: number;
        total_updated: number;
        error_count: number;
        _links: {
            rel: string;
            href: string;
            method: HttpMethod;
            targetSchema?: string;
            schema?: string;
        }[],
    }

    export default {
        setConfig: (_config: IMailchimpConfig): void => { },
        ping: {
            get: (): Promise<IPingSuccess> => { },
        },
        lists: {
            batchListMembers: (_listId: string, _request: IBatchListMembersRequest, _options: IBatchListMembersOptions): Promise<IBatchListMembersResponse> => { },
            updateList: (_listId: string, _request: IUpdateListRequest): Promise<IUpdateListResponse> => { },
        },
    };
}
