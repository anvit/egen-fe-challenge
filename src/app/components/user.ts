/**
 * User
 * @class
 * @classdesc This class represents a user. A user object could store ID, first name, last name, email, address, date created, company, and profile photo URL.
 */
export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: Address;
    dateCreated: string;
    company: Company;
    profilePic: string
}

/**
 * Interface which represents Address
 * @interface
 */
interface Address {
    street: string,
    city: string,
    zip: string,
    state: string,
    country: string
}

/**
 * Interface which represents a Company's information.
 * @interface
 */
interface Company {
    name: string,
    website: string
}
