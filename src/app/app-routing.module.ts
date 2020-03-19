import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },  {
    path: 'alert-ion',
    loadChildren: () => import('./pages/alert-ion/alert-ion.module').then( m => m.AlertIonPageModule)
  },
  {
    path: 'avatar-ion',
    loadChildren: () => import('./pages/avatar-ion/avatar-ion.module').then( m => m.AvatarIonPageModule)
  },
  {
    path: 'button-ion',
    loadChildren: () => import('./pages/button-ion/button-ion.module').then( m => m.ButtonIonPageModule)
  },
  {
    path: 'card-ion',
    loadChildren: () => import('./pages/card-ion/card-ion.module').then( m => m.CardIonPageModule)
  },
  {
    path: 'checkbox-ion',
    loadChildren: () => import('./pages/checkbox-ion/checkbox-ion.module').then( m => m.CheckboxIonPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
