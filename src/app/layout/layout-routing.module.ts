import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ROUTER} from '../shared/constants/router.const';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path:  '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'cats',
        loadChildren: '../cats/cats.module#CatsModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: ROUTER.notFound.path,
    component: NotFoundComponent,
    data: {
      title: ROUTER.notFound.title
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
