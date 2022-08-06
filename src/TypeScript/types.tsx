export interface ITodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface IUserAdressGeo {
  lat: string;
  lng: string;
}
interface IUserAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUserAdressGeo;
}

interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUserItem {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAdress;
  phone: string;
  website: string;
  company: IUserCompany;
}
