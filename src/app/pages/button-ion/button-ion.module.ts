import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonIonPageRoutingModule } from './button-ion-routing.module';

import { ButtonIonPage } from './button-ion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonIonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ButtonIonPage]
})
export class ButtonIonPageModule {}
