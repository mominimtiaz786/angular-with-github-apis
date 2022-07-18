import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';

import { UsersComponent } from './users.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    UsersComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModuleModule
  ],
  exports:[
  ]
})
export class UsersModule { }
