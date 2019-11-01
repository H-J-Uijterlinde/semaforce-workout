import {AccountInfo} from './account-info';

export class User {
  constructor(
    public id: bigint,
    public userName: string,
    public password: string,
    public info: AccountInfo
  ) {
  }
}
