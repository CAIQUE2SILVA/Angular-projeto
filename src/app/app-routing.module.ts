import { PipesPageComponent } from './pages/pipes-page/pipes-page.component';
import { FormPageComponent } from './page/form-page/form-page.component';
import { PagesModule } from './pages/pages.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'my-list', component: ListPageComponent},
  {path: 'my-form', component: FormPageComponent},
  {path:'pipes-examples', component: PipesPageComponent},
  { path: '**', redirectTo: 'my-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
