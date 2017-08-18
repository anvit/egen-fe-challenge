import { Component, Input } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
    moduleId: module.id,
    selector: 'addusers',
    templateUrl: './addUser.component.html',
    providers: [UsersService]
})

/**
 * AddUserComponent
 * @class
 * @classdesc This class represents a component which provides the capability of adding new users.
 */
export class AddUserComponent {
    constructor(private usersService: UsersService, private router: Router) {}

    /**
     * Function called on form submit. Form can only submitted if data is consided valid as per validation rules in
     * the template. After adding the user, redirect to the list of all
     * @param value Data inputs from the form
     * @function
     * @private
     */
    onSubmit(value:any) {
        this.usersService.addUser(value).subscribe(response => {
            this.router.navigate(['']);
        });
    }
}
