import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxIonPageRoutingModule } from './checkbox-ion-routing.module';

import { CheckboxIonPage } from './checkbox-ion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxIonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CheckboxIonPage]
})
export class CheckboxIonPageModule {}
