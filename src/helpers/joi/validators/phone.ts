import { CustomHelpers, ErrorReport } from "joi";
import { phone as phoneValidator } from "phone";

function phone(phone: string, helpers: CustomHelpers): string | ErrorReport {
  const phoneValidationResult = phoneValidator(phone);

  if (!phoneValidationResult.isValid) {
    return helpers.error("any.invalid");
  }

  return phoneValidationResult.phoneNumber;
}

export default phone;
