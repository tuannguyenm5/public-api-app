import { NgModule } from '@angular/core';

import { CatsRoutingModule } from './cats-routing.module';
import { ListCatsComponent } from './list-cats/list-cats.component';
import { DetailCatsComponent } from './cat/detail-cats.component';
import {LayoutSharedModule} from '../shared/modules/layout-shared.module';

@NgModule({
  imports: [
    CatsRoutingModule,
    LayoutSharedModule
  ],
  declarations: [ListCatsComponent, DetailCatsComponent]
})
export class CatsModule { }
