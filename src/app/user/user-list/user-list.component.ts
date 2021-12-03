import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gender, Role, User } from 'src/app/models/User';

@Component({
  selector: 'es3-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() persons!: User[];
  @Output() deleteUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

}
