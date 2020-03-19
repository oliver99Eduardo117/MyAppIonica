import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Componente[] = [
    {
      icon: 'logo-xbox',
      name: 'Action Sheet',
      redirectTO: '/action-sheet'
    },
    {
      icon: 'flame-outline',
      name: 'Alert',
      redirectTO: '/alert'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert-Ion',
      redirectTO: '/alert-ion'
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar-Ion',
      redirectTO: '/avatar-ion'
    },
    {
      icon: 'play-circle-outline',
      name: 'Button-Ion',
      redirectTO: '/button-ion'
    },
    {
      icon: 'card-outline',
      name: 'Card-Ion',
      redirectTO: '/card-ion'
    },
    {
      icon: 'checkbox-outline',
      name: 'Checkbox-Ion',
      redirectTO: '/checkbox-ion'
    },
];

  constructor() { }

  ngOnInit() {
  }


}

interface Componente {
   icon: string;
   name: string;
   redirectTO: string;
 }
