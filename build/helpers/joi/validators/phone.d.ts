import { CustomHelpers, ErrorReport } from "joi";
declare function phone(phone: string, helpers: CustomHelpers): string | ErrorReport;
export default phone;
