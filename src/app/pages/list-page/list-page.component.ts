import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public myArray = [1 ,2 ,3 ,4]
  public myName = 'Caique'

  constructor() { }

  ngOnInit(): void {
  }


  addToMyArrray() {
    this.myArray.push(5)
  }

  onCardClick(value: number){
    console.log('click', value)

  }

}
