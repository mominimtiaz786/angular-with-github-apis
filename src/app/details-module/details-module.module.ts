import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsModuleRoutingModule } from './details-module-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';

import { DetailsModuleComponent } from './details-module.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    DetailsModuleComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    DetailsModuleRoutingModule,
    SharedModuleModule
  ]
})
export class DetailsModuleModule { }
