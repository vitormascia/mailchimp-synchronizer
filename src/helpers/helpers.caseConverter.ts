import camelcasekeys, { Options as CamelCaseKeysOptions } from "camelcase-keys";
import snakecasekeys, { Options as SnakeCaseKeysOptions } from "snakecase-keys";

class CaseConverter {
    private readonly camelCaseConverter: typeof camelcasekeys = camelcasekeys;
    private readonly snakeCaseConverter: typeof snakecasekeys = snakecasekeys;

    public toCamelCase<T>(object: Record<string, unknown> | Record<string, unknown>[], options: CamelCaseKeysOptions = { deep: true, exclude: [] }): T {
        return this.camelCaseConverter(object, options) as T;
    }

    public toSnakeCase<T>(object: Record<string, unknown> | Record<string, unknown>[], options: SnakeCaseKeysOptions = { deep: true, exclude: [] }): T {
        return this.snakeCaseConverter(object, options) as T;
    }
}

const caseConverter = new CaseConverter();

export default caseConverter;
export { CaseConverter };
