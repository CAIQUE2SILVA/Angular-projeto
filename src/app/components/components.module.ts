import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCardComponent } from './my-card/my-card.component';



@NgModule({
  declarations: [
    MyCardComponent
  ],
  exports:[MyCardComponent],

  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }


















// class Hero{

//   constructor(public ataque : number) {

//   }

//   atacar() {
//     //ataca
//   }
//   defender() {
//     //defende
//   }
// }

// const myHero = new Hero (1);

// const otherHero = new Hero (2);

