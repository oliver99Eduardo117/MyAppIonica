import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-ion',
  templateUrl: './checkbox-ion.page.html',
  styleUrls: ['./checkbox-ion.page.scss'],
})
export class CheckboxIonPage implements OnInit {
  
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];
  constructor() { }

  ngOnInit() {
  }



}
