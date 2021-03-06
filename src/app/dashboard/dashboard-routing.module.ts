import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ROUTER} from '../shared/constants/router.const';

const routes: Routes = [
  {
    path: ROUTER.dashBoard.path,
    component: DashboardComponent,
    data: ROUTER.dashBoard.data
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
