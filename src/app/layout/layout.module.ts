import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import {LayoutSharedModule} from '../shared/modules/layout-shared.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {LayoutRoutingModule} from './layout-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainLayoutComponent
  ],
  imports: [
    LayoutRoutingModule,
    LayoutSharedModule
  ]
})
export class LayoutModule { }
