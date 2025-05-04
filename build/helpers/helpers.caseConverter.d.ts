import { Options as CamelCaseKeysOptions } from "camelcase-keys";
import { Options as SnakeCaseKeysOptions } from "snakecase-keys";
declare class CaseConverter {
    private readonly camelCaseConverter;
    private readonly snakeCaseConverter;
    toCamelCase<T>(object: Record<string, unknown> | Record<string, unknown>[], options?: CamelCaseKeysOptions): T;
    toSnakeCase<T>(object: Record<string, unknown> | Record<string, unknown>[], options?: SnakeCaseKeysOptions): T;
}
declare const caseConverter: CaseConverter;
export default caseConverter;
export { CaseConverter };
