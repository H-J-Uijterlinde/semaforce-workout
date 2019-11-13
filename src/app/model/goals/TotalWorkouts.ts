import {UserView} from '../user/UserView';

export class TotalWorkouts {
  constructor(
    public user: UserView,
    public totalWorkouts: number,
    public endDate: Date
  ) {}
}
