import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[
  ]
})
export class UsersModule { }
