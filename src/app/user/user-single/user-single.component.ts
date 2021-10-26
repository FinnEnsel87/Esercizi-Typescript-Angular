import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'es3-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() user!:string
  constructor() { }

  ngOnInit(): void {
  }

}
