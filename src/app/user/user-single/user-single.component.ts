import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'es3-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  // decoratore per passare dei dati dal padre al figlio (univocamente)
  // si crea una "proprietà" assegnando il tipo e 
  @Input() user!: User
  @Output() deleteUser = new EventEmitter<User>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
