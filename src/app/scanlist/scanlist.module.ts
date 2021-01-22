import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanlistPageRoutingModule } from './scanlist-routing.module';

import { ScanlistPage } from './scanlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanlistPageRoutingModule
  ],
  declarations: [ScanlistPage]
})
export class ScanlistPageModule {}
