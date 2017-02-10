'use strict'

export class Availability {
  regularWeek: WeekAvailability; // @todo: array?
  customDates? : Map<string, HourAvailability[]>; //'2016-12-29': HourlyAvailability

  constructor() {
    this.regularWeek = new WeekAvailability();
  }
}

export class WeekAvailability {
    // @todo Make sure each day has 24 elements.
    Monday: HourAvailability[];
    Tuesday: HourAvailability[];
    Wednesday: HourAvailability[];
    Thursday: HourAvailability[];
    Friday: HourAvailability[];
    Saturday: HourAvailability[];
    Sunday: HourAvailability[];

    constructor() {
      this.setDefaultWorkingDays();
    }

    setDefaultWorkingDays() {
      const offHour = new HourAvailability(false);
      const onHour = new HourAvailability(true, 0, 60);

      // Create 2 types of days.
      let workingDay: HourAvailability[] = [];
      let nonWorkingDay: HourAvailability[] = [];

      for (let i = 0; i < 24; i++) {
        // Working days have default working hours (8am-4pm).
        if (i > 7 && i < 17) {
          workingDay.push(onHour);
        }
        else {
          workingDay.push(offHour);
        }

        // Non working days only have offHours.
        nonWorkingDay.push(offHour);
      }

      // Set Monday to Friday.
      this.Monday =
      this.Tuesday =
      this.Wednesday =
      this.Thursday =
      this.Friday = workingDay;

      // Set the weekend days.
      this.Saturday =
      this.Sunday = nonWorkingDay;
    }
}

export class HourAvailability {
    isAvailable: boolean;
    from: number;  // min
    to: number;

    constructor(isAvailable: boolean = false,
      from: number = 0, to: number = 0) {

      this.isAvailable = isAvailable;
      this.from = from;
      this.to = to;
    }
}
