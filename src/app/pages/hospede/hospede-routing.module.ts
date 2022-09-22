import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospedePage } from './hospede.page';

const routes: Routes = [
  {
    path: '',
    component: HospedePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospedePageRoutingModule {}
