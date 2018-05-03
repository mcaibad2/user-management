export class User {
  _id: string;
  name: string;
  avatar: string|any;
  birthday: string;
  country: string;
  appsCount: number;
  apps: [{
    _id: String,
    name: String,
    avatar: String
  }];
}
