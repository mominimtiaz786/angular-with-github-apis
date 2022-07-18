import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsModuleRoutingModule } from './details-module-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';

import { DetailsModuleComponent } from './details-module.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReposListComponent } from './repos-list/repos-list.component';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [
    DetailsModuleComponent,
    UserDetailsComponent,
    ReposListComponent
  ],
  imports: [
    CommonModule,
    DetailsModuleRoutingModule,
    SharedModuleModule
  ]
})
export class DetailsModuleModule { }
