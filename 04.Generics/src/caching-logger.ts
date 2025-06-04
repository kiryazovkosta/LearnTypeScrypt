export enum LoggingLevel {
    Info = "Info",
    Error = "Error",
    Warning = "Warning",
    Debug = "Debug",
}

export enum LoggingFormat {
    Standard = "[%level][%date] %text",
    Minimal = "*%level* %text"
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
    cachedLogs: Map<T, string[]>
    log(logLevel: T, message: string): void;
    getFormat(): V
}

export class Logger<T extends LoggingLevel, V extends LoggingFormat> implements CachingLogger<T, V> {
    cachedLogs: Map<T, string[]> = new Map<T, string[]>();
    private _format: V;

    constructor(format: V) {
        this._format = format;
    }

    log(logLevel: T, message: string): void {
        const formattedMessage = this._format
            .replace('%level', logLevel)
            .replace('%date', new Date().toISOString())
            .replace('%text', message);

        console.log(formattedMessage);

        const currentMessages = this.cachedLogs.get(logLevel);
        if (currentMessages) {
            currentMessages.push(formattedMessage);
        } else {
            this.cachedLogs.set(logLevel, [formattedMessage]);
        }
    }

    getFormat(): V {
        return this._format;
    }
}