declare const ping: () => import("../../ts/interfaces.js").PingResponse;
declare const pingMailchimp: () => Promise<import("../../ts/interfaces.js").PingMailchimpResponse>;
declare const healthChecksService: Readonly<{
    ping: () => import("../../ts/interfaces.js").PingResponse;
    pingMailchimp: () => Promise<import("../../ts/interfaces.js").PingMailchimpResponse>;
}>;
export default healthChecksService;
export { ping, pingMailchimp };
