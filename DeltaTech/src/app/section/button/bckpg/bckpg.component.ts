
import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './bckpg.component.html',

})
export class BckpgComponent {
  @Input() color: string;

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
