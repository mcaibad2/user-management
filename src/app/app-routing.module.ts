import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from './components/users/users.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserAddComponent} from './components/user-add/user-add.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'user-add', component: UserAddComponent},
  {path: 'user-detail/:id', component: UserDetailComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
