declare const ping: () => import("../../ts/interfaces.js").IPingResponse;
declare const pingMailchimp: () => Promise<import("../../ts/interfaces.js").IPingMailchimpResponse>;
declare const healthChecksService: Readonly<{
    ping: () => import("../../ts/interfaces.js").IPingResponse;
    pingMailchimp: () => Promise<import("../../ts/interfaces.js").IPingMailchimpResponse>;
}>;
export default healthChecksService;
export { ping, pingMailchimp };
