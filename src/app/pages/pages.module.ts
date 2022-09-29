import { NgModule } from '@angular/core';
import { ComponentsModule } from './../components/components.module';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from '../pages/list-page/list-page.component';
import { FormPageComponent } from '../page/form-page/form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListPageComponent,
    FormPageComponent
  ],
  exports:[
    ListPageComponent,
    FormPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PagesModule { }
