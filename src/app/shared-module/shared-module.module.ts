import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UsersListComponent,
    SpinnerComponent,
    SearchBarComponent,
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    UsersListComponent,
    SpinnerComponent,
    SearchBarComponent
  ]
})
export class SharedModuleModule { }
