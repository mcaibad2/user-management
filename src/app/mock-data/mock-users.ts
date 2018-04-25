import {User} from '../model/user';

const avatar = 'https://www.shareicon.net/data/128x128/2016/08/05/807323_gaming_512x512.png';

export const USERS: User[] = [
  {_id: 1, name: 'Mr. Nice', avatar: avatar, birthday: '23', country: 'Greece', appsCount: 6},
  {_id: 2, name: 'Baradur', avatar: avatar, birthday: '32', country: 'Greece', appsCount: 4},
  {_id: 3, name: 'Richard Divine', avatar, birthday: '1980', country: 'Denmark', appsCount: 5},
  {_id: 4, name: 'Espresso', avatar: avatar, birthday: '67', country: 'Greece', appsCount: 3}
];
