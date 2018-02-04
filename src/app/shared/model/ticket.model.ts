export class Ticket {
  constructor(
    public id?: string,
    public userId?: string,
    public name?: string,
    public description?: string,
    public status?: string,
    public date?: string) {
  }
}
