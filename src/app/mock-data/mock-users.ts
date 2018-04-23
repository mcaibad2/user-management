import {User} from '../model/user';

const avatar = 'https://www.shareicon.net/data/128x128/2016/08/05/807323_gaming_512x512.png';

export const USERS: User[] = [
  {id: 1, name: 'Mr. Nice', avatar: avatar, age: 23, country: 'Greece', numberOfApps: 6},
  {id: 2, name: 'Baradur', avatar: avatar, age: 32, country: 'Greece', numberOfApps: 4},
  {id: 3, name: 'Richard Divine', avatar: avatar, age: 5, country: 'Denmark', numberOfApps: 5},
  {id: 4, name: 'Espresso', avatar: avatar, age: 67, country: 'Greece', numberOfApps: 3}
];
