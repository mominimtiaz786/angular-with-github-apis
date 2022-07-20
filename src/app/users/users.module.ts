import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
// import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModuleModule,
  ],
  exports:[
  ]
})
export class UsersModule { }
