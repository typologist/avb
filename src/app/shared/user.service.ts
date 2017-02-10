import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService {

  users: User[];

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('app/mocks/users-mock.json')
      .map(response => <User[]>response.json().data)
      .subscribe(
        data => this.users = data,
        error => console.log(error)
      );
  }

  filterUsers(keyword: string) {
      if (!keyword) {
        return this.users;
      }

      keyword = keyword.trim();

      return this.users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.toLowerCase().includes(keyword.toLowerCase());
      });
  }

  addUser(user) {
    this.users = [...this.users, user];  // clone array and add another element.
  }


}
