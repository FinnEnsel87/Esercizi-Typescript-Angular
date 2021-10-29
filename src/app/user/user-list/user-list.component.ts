import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es3-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }
  users: string[] = ["user1", "user2", "user3"]
  ngOnInit(): void {
  }

}
