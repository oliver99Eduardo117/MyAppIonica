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
