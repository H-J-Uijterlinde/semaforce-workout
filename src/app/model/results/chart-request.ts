export class ChartRequest {

  constructor(

    public userId: bigint,
    public exerciseId: bigint,
    public numReps: number
  ) {}
}
