import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import {LayoutSharedModule} from '../shared/modules/layout-shared.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainLayoutComponent,
    NotFoundComponent
  ],
  imports: [
    LayoutRoutingModule,
    LayoutSharedModule
  ]
})
export class LayoutModule { }
