import {Injectable} from '@angular/core/';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

const baseAPIUrl = "http://mocker.egen.io";

/**
 * UsersService
 * @class
 * @classdesc User service class which provides methods for CRUD operations on users.
 */
@Injectable()
export class UsersService {
    constructor(private http: Http) {}

    /**
     * Return the user information for the given User ID.
     * @param userId User ID
     * @returns {User} User for the given ID
     * @function
     */
    getUser(userId:string) {
        return this.http.get(baseAPIUrl + '/users/' + userId).map(res => res.json());
    };

    /**
     * Returns a list of all users present.
     * @returns {User[]} Array of all users
     * @function
     */
    allUsers() {
        return this.http.get(baseAPIUrl + '/users').map(res => res.json());
    };

    /**
     * Creates a new user.
     * @param user User to be passed to the API for creation
     * @returns {json} JSON response returned from the API used to create the user
     * @function
     */
    addUser(user:any) {
        return this.http.post(baseAPIUrl + '/users', user);
    };

    /**
     * Deletes a user.
     * @param userId User ID for the user to be deleted
     * @returns {json} JSON response returned from the API used to delete the user
     * @function
     */
    deleteUser(userId:string) {
        return this.http.delete(baseAPIUrl + '/users/' + userId);
    };

}
