
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/interfaces';


@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {


  @Output() CardClick: EventEmitter<TodoItem>

  @Input() value: TodoItem = {id: 0, message: ''}

  constructor() {
    this.CardClick = new EventEmitter<TodoItem>()
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.CardClick.emit(this.value)
  }


}
