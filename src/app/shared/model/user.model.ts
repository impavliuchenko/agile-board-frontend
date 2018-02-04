export class User {
  constructor(
    public id?: number,
    public username?: string,
    public password?: string,
    public name?: string,
    public dateBirthday?: any,
    public authorities?: any[],
    public tickets?: any[]
    ) {}
}
