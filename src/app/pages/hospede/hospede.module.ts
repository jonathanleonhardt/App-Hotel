import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospedePageRoutingModule } from './hospede-routing.module';

import { HospedePage } from './hospede.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospedePageRoutingModule
  ],
  declarations: [HospedePage]
})
export class HospedePageModule {}
