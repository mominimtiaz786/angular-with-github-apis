import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    UsersListComponent,
  ]
})
export class SharedModuleModule { }
