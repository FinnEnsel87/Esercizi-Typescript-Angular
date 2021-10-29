import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es3-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor() { }
  users: string[] = ["user1", "user2", "user3"]
  ngOnInit(): void {
  }

}
