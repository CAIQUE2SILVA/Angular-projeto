import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pipes-page',
  templateUrl: './pipes-page.component.html',
  styleUrls: ['./pipes-page.component.scss']
})
export class PipesPageComponent implements OnInit {

  public today : Date = new Date()
  public lowercaseString: string = 'lowercaseString'
  public uppercaseString: string = 'UPPERCASESTRING'
  public titlecaseString: string = 'two works'
  public moneyValue: number =30.4
  public myPipeString : string = 'o valor vai ser alterado '
  public myPipeNumbre : number = 10 ;

  //AsyncPipe
  private value: string = 'text'
  public stream: BehaviorSubject<string> =
    new BehaviorSubject(this.value)

  constructor() { }

  ngOnInit(): void {
  }

  onAdd () : void {
  //   this.value++

  //   this.stream.next(this.value)
  // }
    this.value = `${this.value} text`
    this.stream.next(this.value)
  }
}
