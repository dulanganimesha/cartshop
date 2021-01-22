import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewcartPageRoutingModule } from './viewcart-routing.module';

import { ViewcartPage } from './viewcart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewcartPageRoutingModule
  ],
  declarations: [ViewcartPage]
})
export class ViewcartPageModule {}
