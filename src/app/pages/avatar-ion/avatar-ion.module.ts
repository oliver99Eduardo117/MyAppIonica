import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarIonPageRoutingModule } from './avatar-ion-routing.module';

import { AvatarIonPage } from './avatar-ion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarIonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AvatarIonPage]
})
export class AvatarIonPageModule {}
