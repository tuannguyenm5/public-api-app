import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListCatsComponent} from './list-cats/list-cats.component';
import {DetailCatsComponent} from './cat/detail-cats.component';

const routes: Routes = [
  {
    path: '',
    component: ListCatsComponent
  },
  {
    path: '/detail/:id',
    component: DetailCatsComponent,
    data: {a: 'detail'}
  },
  {
    path: '/new',
    component: DetailCatsComponent,
    data: {a: 'new'}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CatsRoutingModule { }
