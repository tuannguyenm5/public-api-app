import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListCatsComponent} from './list-cats/list-cats.component';
import {DetailCatsComponent} from './cat/detail-cats.component';
import {ROUTER} from '../shared/constants/router.const';

const routes: Routes = [
  {
    path: ROUTER.cats.index.path,
    component: ListCatsComponent,
    data: {
      title: ROUTER.cats.index.title,
      action: ROUTER.cats.index.action
    }
  },
  {
    path: ROUTER.cats.detail.path,
    component: DetailCatsComponent,
    data: {
      title: ROUTER.cats.detail.title,
      action: ROUTER.cats.detail.action
    }
  },
  {
    path: ROUTER.cats.new.path,
    component: DetailCatsComponent,
    data: {
      title: ROUTER.cats.new.title,
      action: ROUTER.cats.new.action
    }
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
