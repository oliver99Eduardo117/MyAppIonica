import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardIonPageRoutingModule } from './card-ion-routing.module';

import { CardIonPage } from './card-ion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardIonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CardIonPage]
})
export class CardIonPageModule {}
