import camelcasekeys from "camelcase-keys";
import snakecasekeys from "snakecase-keys";
class CaseConverter {
    camelCaseConverter = camelcasekeys;
    snakeCaseConverter = snakecasekeys;
    toCamelCase(object, options = { deep: true, exclude: [] }) {
        return this.camelCaseConverter(object, options);
    }
    toSnakeCase(object, options = { deep: true, exclude: [] }) {
        return this.snakeCaseConverter(object, options);
    }
}
const caseConverter = new CaseConverter();
export default caseConverter;
//# sourceMappingURL=helpers.caseConverter.js.map