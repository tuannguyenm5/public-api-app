import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {LayoutSharedModule} from '../shared/modules/layout-shared.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    LayoutSharedModule
  ]
})
export class DashboardModule { }
