import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxIonPage } from './checkbox-ion.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxIonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxIonPageRoutingModule {}
