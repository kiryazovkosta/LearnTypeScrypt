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

        if (day >= WeekDays.Monday && day <= WeekDays.Sunday) {
            return WeekDays[day];
        }

        return 'error'
    }
} 