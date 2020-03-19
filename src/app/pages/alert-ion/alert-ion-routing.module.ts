import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertIonPage } from './alert-ion.page';

const routes: Routes = [
  {
    path: '',
    component: AlertIonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertIonPageRoutingModule {}
