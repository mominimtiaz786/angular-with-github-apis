import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsModuleComponent } from './details-module.component';

const routes: Routes = [
  { path: ':username', component: DetailsModuleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsModuleRoutingModule { }
