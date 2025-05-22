type HttpResponse = {
    code: 200 |201 | 301,
    text: string
}

type HttpResponseWithPrintChars = {
    code: 400 | 404 | 500,
    text: string,
    printChars?: number
}

export const getHttpResponse = (response: HttpResponse | HttpResponseWithPrintChars): string => {
    switch (response.code) {
        case 200:
        case 201:
        case 301: return(response.text);
        case 400:
        case 404:
        case 500: return response.text.slice(0, response.printChars);
    }
}