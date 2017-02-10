import { Availability } from './availability';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  cityId?: string;
  status?: number;
  availability?: Availability;
  utc?: number;
}
