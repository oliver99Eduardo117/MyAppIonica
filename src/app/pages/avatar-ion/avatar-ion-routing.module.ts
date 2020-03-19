import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarIonPage } from './avatar-ion.page';

const routes: Routes = [
  {
    path: '',
    component: AvatarIonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvatarIonPageRoutingModule {}
