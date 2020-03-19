import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertIonPageRoutingModule } from './alert-ion-routing.module';

import { AlertIonPage } from './alert-ion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertIonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AlertIonPage]
})
export class AlertIonPageModule {}
