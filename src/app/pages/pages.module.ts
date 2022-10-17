import { PipesModule } from './../pipes/pipes.module';
import { DirectivesModule } from './../directives/directives.module';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './../components/components.module';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from '../pages/list-page/list-page.component';
import { FormPageComponent } from '../page/form-page/form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesPageComponent } from './pipes-page/pipes-page.component';



@NgModule({
  declarations: [
    ListPageComponent,
    FormPageComponent,
    PipesPageComponent
  ],
  exports:[
    ListPageComponent,
    FormPageComponent,
    PipesPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    PipesModule
  ]
})
export class PagesModule { }
