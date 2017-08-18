import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ListUsersComponent} from './components/listUsers.component';
import {ViewUserComponent} from './components/viewUser.component';
import {AddUserComponent}  from './components/addUser.component';


const routes = [
    {
        path:'',
        component: ListUsersComponent
    },
    {
        path:'users/:id',
        component: ViewUserComponent
    },
    {
        path:'addUser',
        component: AddUserComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
