import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanlistPage } from './scanlist.page';

const routes: Routes = [
  {
    path: '',
    component: ScanlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanlistPageRoutingModule {}
