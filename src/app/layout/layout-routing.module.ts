import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ROUTER} from '../shared/constants/router.const';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTER.dashBoard.path,
    pathMatch: 'full'
  },
  {
    path:  '',
    component: MainLayoutComponent,
    children: [
      {
        path: ROUTER.dashBoard.pathModule,
        loadChildren: '../dashboard/dashboard.module#DashboardModule'
      },
      {
        path: ROUTER.cats.pathModule,
        loadChildren: '../cats/cats.module#CatsModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ROUTER.notFound.path
  },
  {
    path: ROUTER.notFound.path,
    component: NotFoundComponent,
    data: ROUTER.notFound.data
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
