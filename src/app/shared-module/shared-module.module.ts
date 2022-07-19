import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    UsersListComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    UsersListComponent,
    SpinnerComponent
  ]
})
export class SharedModuleModule { }
