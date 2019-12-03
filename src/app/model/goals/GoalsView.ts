export class GoalsView {
  constructor(
    public id: bigint,
    public title: string,
    public subTitle: string,
    public completionPercentage: number,
    public startedDate: Date,
    public lastUpdateDate: Date
  ) {
  }
}
