import { stripHtml } from "string-strip-html";

export function sanitizeObject<T>(object: T): void {
    for (const key of Object.keys(object)) {
        if (typeof (object[key]) === "string") {
            object[key] = stripHtml(object[key])?.result.trim() ?? object[key];
            if (key?.toLowerCase()?.includes('id')) {
                object[key] = Number(object[key]);
            }
        }

    }
}
