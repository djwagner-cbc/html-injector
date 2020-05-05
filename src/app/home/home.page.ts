import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  templateAngular = '<button *ngIf="true">Angular Push {{name}} </button>';
  templateIonic = '<ion-button>Ionic Push {{name}} </ion-button>';

  constructor() {}

}
