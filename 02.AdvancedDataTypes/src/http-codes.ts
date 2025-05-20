type HttpResponse = {
    code: number,
    text: string,
    printChars?: number
}

export const getHttpResponse = (response: HttpResponse): string => {
    let text: string = response.text
    if (response.printChars !== undefined) {
        text = text.slice(0, response.printChars);
    }

    return text;
}