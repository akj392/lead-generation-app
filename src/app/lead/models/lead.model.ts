import { v4 as uuidv4 } from 'uuid';
export class Lead {
  id: string;
  name: string;
  phone: number;
  email: string;
  address?: string;

  constructor(obj?: any) {
    this.id = generateUUID(obj?.id);
    this.name = obj?.name;
    this.phone = obj?.phone;
    this.email = obj?.email;
    this.address = obj?.address;
  }
}

const generateUUID = (id?: string): string => {
  if (id) {
    return id;
  }
  return uuidv4();
}