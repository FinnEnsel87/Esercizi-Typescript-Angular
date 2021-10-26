import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'es3-order-single',
  templateUrl: './order-single.component.html',
  styleUrls: ['./order-single.component.css']
})
export class OrderSingleComponent implements OnInit {
  @Input() user!:string 
  constructor() { }
  ngOnInit(): void {
  }

}
