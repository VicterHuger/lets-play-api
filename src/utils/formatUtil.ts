import { generateThrowErrorMessage } from "./errorUtil";

export function formatDateFormat(string: string | Date) {
    return new Date(string);
}

export function formatNumberFormat(string: number | number) {
    const number = Number(string);
    if (isNaN(number)) generateThrowErrorMessage('InternalServerError', 'Input type of formatNumberFormat can not be convertedt into number');
    return number;
}