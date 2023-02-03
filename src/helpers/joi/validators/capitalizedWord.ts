import { CustomHelpers, ErrorReport } from "joi";

function capitalizedWord(name: string, helpers: CustomHelpers): string | ErrorReport {
    const NAME_MAX_LENGTH = 100;

    if (name.length > NAME_MAX_LENGTH) return helpers.error("any.invalid");

    return name.toLowerCase().replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
}

export default capitalizedWord;
