export class Exercises {
    evenSum(a: number, b: number, c: number) : boolean  {
        return (a + b + c) % 2 == 0
    }

    dayOfTheWeek(day: number): string {
        enum WeekDays {
            Monday = 1,
            Tuesday = 2,
            Wednesday = 3,
            Thursday = 4,
            Friday = 5,
            Saturday = 6,
            Sunday = 7
        }

        const dayName = WeekDays[day];
        return dayName !== undefined ? dayName : 'error';
    }

    formatPerson(person:[string, number]): string {
        const [name, age] = person;
        return `Hello, my name is ${name} and my age is ${age}`;
    }

    convertArray(arr: string[]): [string, number] {
        const concatenatedString = arr.join('');
        return [concatenatedString, concatenatedString.length];
    }

    summarizePerson(id: number, firstName: string, lastName: string, age: number, 
        middleName?:string, hobbies?:string[], workInfo?:[string,number])
        : [number, string, number, string|string[], string] {
        
        const fullName: string = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
        const hobbiesString = hobbies ? hobbies.join(', ') : '-';
        const workInfoString = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-';
        return [id, fullName, age, hobbiesString, workInfoString];
    }

    reversedDayofTheWeek(day: string): number |string {
        enum WeekDays {
            Monday = 1,
            Tuesday = 2,
            Wednesday = 3,
            Thursday = 4,
            Friday = 5,
            Saturday = 6,
            Sunday = 7
        }

        const dayNumber: WeekDays | undefined = WeekDays[day as keyof typeof WeekDays];
        return dayNumber !== undefined ? dayNumber : 'error';
    }

    unknownRespons(response: unknown): string {
        return typeof(response as any).value === "string" ? (response as any).value : '-';
    }

    isNonEmptyStringArray(arr: unknown): boolean {
        if (//Array.isArray(arr) 
            arr instanceof Array
            && arr.length > 0 
            && arr.every(item => typeof item === 'string')) {
                return true;
        }

        return false;
    }

    friday13(dates: unknown[]): string {
        const DAY13: number = 13;
        const FRIDAY: number = 5;
        
        let validDates: string[] = Array<string>();
        
        dates.forEach(element => {
            if (element instanceof Date 
                && element.getDate() === DAY13 
                && element.getDay() == FRIDAY) {
                    const month = element.toLocaleString(undefined, { month: 'long' });
                    validDates.push(`${DAY13}-${month}-${element.getFullYear()}`)
            }
        });

        return validDates.join('\n');
    }
} 