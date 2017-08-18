import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ListUsersComponent }  from './components/listUsers.component';
import { ViewUserComponent }  from './components/viewUser.component';
import { AddUserComponent }  from './components/addUser.component';
import { Routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, Routing ],
  declarations: [ AppComponent, ListUsersComponent, ViewUserComponent, AddUserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
