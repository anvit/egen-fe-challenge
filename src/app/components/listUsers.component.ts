import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from './user';

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: './listUsers.component.html',
    providers: [UsersService]
})

/**
 * ListUsersComponent
 * @class
 * @classdesc This class represents a component which can provide a summary of all the users in a tabular form
 */
export class ListUsersComponent {
    users: User[];

    /**
     * Fetch the info about the users in order to render the template
     * @function
     * @private
     */
    constructor(private usersService: UsersService) {
        this.users = [];
        this.usersService.allUsers().subscribe(users => {
            for (let i = 0; i < users.length; i++) {
                this.users.push(users[i]);
            }
        });
    }
}
