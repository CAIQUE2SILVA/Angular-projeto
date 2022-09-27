import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {


  @Output() CardClick: EventEmitter<number>

  @Input() value: number = 0

  constructor() {
    this.CardClick = new EventEmitter<number>()
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.CardClick.emit(this.value)
  }


}
