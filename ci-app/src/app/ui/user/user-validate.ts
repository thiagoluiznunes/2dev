export class UserValidate {
  constructor(
    public name: string,
    public email: string,
    public token: string,
    public isValid?: boolean) {
  }
}
