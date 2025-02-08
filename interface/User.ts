export interface UserDocument {
  _id: string;
  email: string;
  username: string;
  image: string;
  name: string;
  surname: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserAddress {
  _userId: string;
  address1: string;
  address2: string;
  suburb: string;
  city: string;
  postalCode: string;
}

export interface UserDetails {
  email: string;
  username: string;
  image: string;
  name: string;
  surname: string;
}