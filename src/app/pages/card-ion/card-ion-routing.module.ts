import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardIonPage } from './card-ion.page';

const routes: Routes = [
  {
    path: '',
    component: CardIonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardIonPageRoutingModule {}
