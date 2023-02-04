import { phone as phoneValidator } from "phone";
function phone(phone, helpers) {
    const phoneValidationResult = phoneValidator(phone);
    if (!phoneValidationResult.isValid) {
        return helpers.error("any.invalid");
    }
    return phoneValidationResult.phoneNumber;
}
export default phone;
//# sourceMappingURL=phone.js.map