import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonAlert, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {alarm, alarmOutline, flashlight, heart} from 'ionicons/icons'
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonAlert, IonIcon],
})
export class HomePage {
  private myService : MyserviceService = inject(MyserviceService);
  constructor() {
    addIcons({alarm, alarmOutline, flashlight, heart})
  }
  alertButtons = [
    {text: 'Cancel', role: 'cancel', handler:()=>{console.log('clicked on cancel')}},
    {text: 'Ok', role:'ok', handler: ()=>{console.log('clicked on ok')}}
  ]
  alertInputs = [
    {placeholder: 'Enter name'},
    {placeholder : 'Enter age'}
  ];
}
/*
  <ion-button>
*/