export class Lead {
  id: number;
  name: string;
  phone: number;
  email?: string;
  address?: string;

  constructor(obj?: any) {
    this.id = obj?.id;
    this.name = obj?.name;
    this.phone = obj?.phone;
    this.address = obj?.address;
  }
}
