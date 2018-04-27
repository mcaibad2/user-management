import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserManagementComponent} from './components/user-management/user-management.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HistoryComponent} from './components/history/history.component';
import {UsersComponent} from './components/users/users.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {UserAddComponent} from './components/user-add/user-add.component';

import {UserService} from './services/user.service';
import {HistoryService} from './services/history.service';

import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AgePipe} from './pipes/agePipe';
import {AvatarPipe} from './pipes/avatarPipe';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    HeaderComponent,
    FooterComponent,
    HistoryComponent,
    UsersComponent,
    UserDetailComponent,
    UserEditComponent,
    UserAddComponent,
    AgePipe,
    AvatarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    HistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
