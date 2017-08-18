import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from './user';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: './viewUser.component.html',
    providers: [UsersService]
})

/**
 * ViewUserComponent
 * @class
 * @classdesc This class represents a component which can provide details about a specifix user.
 */
export class ViewUserComponent implements OnInit {
    userInfo: User;

    constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {}

    /**
     * On page load, fetch the info about the user in order to render the template
     * @function
     * @private
     */
    ngOnInit(): void {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.usersService.getUser(params.get('id')))
          .subscribe(user => {
              this.userInfo = user;
          });
    }

    /**
     * Function called on delete button clicked. Sends a request to delete the current
     * user and then navigates to the list of all the users.
     * @function
     * @private
     */
    onDelete() {
        this.route.params.subscribe((params: Params) => {
        let userId = params['id'];
        this.usersService.deleteUser(userId).subscribe(response => {
            this.router.navigate(['']);
        });
      });
    }
}
