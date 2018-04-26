import {User} from '../model/user';

const avatar = 'https://www.shareicon.net/data/128x128/2016/08/05/807323_gaming_512x512.png';

export const USERS: User[] = [{
  _id: '1', name: 'Mr. Nice', avatar: avatar, birthday: '23', country: 'Greece', appsCount: 6, apps: [{
    _id: 'xyz', name: 'Jega', avatar: avatar
  }]
}];
