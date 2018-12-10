import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListCatsComponent} from './list-cats/list-cats.component';
import {DetailCatsComponent} from './cat/detail-cats.component';
import {ROUTER} from '../shared/constants/router.const';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTER.cats.list.path,
    pathMatch: 'full'
  },
  {
    path: ROUTER.cats.list.path,
    component: ListCatsComponent,
    data: ROUTER.cats.list.data
  },
  {
    path: ROUTER.cats.detail.path,
    component: DetailCatsComponent,
    data: ROUTER.cats.detail.data
  },
  {
    path: ROUTER.cats.new.path,
    component: DetailCatsComponent,
    data: ROUTER.cats.new.data
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
