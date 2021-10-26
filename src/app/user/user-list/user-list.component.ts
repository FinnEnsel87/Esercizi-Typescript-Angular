import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es3-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }
  users: string[] = ["user-single 1", "user-single 2", "user-single 3"]
  ngOnInit(): void {
  }

}
