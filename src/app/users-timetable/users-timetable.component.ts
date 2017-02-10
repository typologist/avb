import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-users-timetable',
  templateUrl: './users-timetable.component.html',
  styleUrls: ['./users-timetable.component.css']
})
export class UsersTimetableComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers();
  }

  filterUsers(keyword: string) {
    console.log('called');
    return this.userService.filterUsers(keyword);
  }

}
