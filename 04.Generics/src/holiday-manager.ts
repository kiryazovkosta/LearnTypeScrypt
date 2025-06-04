export enum TravelVacation {
    Abroad = 'Abroad',
    InCountry = 'InCountry'
}

export enum MountainVacation {
    Ski = 'Ski',
    Hiking = 'Hiking'
}

export enum BeachVacation {
    Pool = 'Pool',
    Sea = 'Sea',
    ScubaDiving = 'ScubaDiving'
}

export interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}


function formatDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export class PlannedHoliday implements Holiday {
    private _start!: Date;
    private _end!: Date;

    constructor(start: Date, end: Date) {
        this.start = start;
        this.end = end;
    }

    public set start(val: Date) {
        if (val > this._end) {
            throw new Error("Start date cannot be after end date.");
        }

        this._start = val;
    }

    public set end(val: Date) {
        if (val < this._start) {
            throw new Error("End date cannot be before start date.");
        }

        this._end = val;
    }

    public getInfo(): string {
        return `Holiday: ${formatDate(this._start)} - ${formatDate(this._end)}`;
    }
}

export class HolidayManager<T extends Holiday, V extends TravelVacation | MountainVacation | BeachVacation> implements VacationManager<T, V> {
    private holidays: Map<T, V> = new Map<T, V>();

    public reserveVacation(holiday: T, vacationType: V): void {
        this.holidays.set(holiday, vacationType);
    }

    public listReservations(): string {
        let result: string[] = [];
        this.holidays.forEach((vacationType, holiday) => {
            result.push(`${holiday.getInfo()} => ${vacationType}`);
        });

        return result.join('\n');
    }
}