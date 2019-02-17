import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fwdpg',
  templateUrl: './fwdpg.component.html',
  styleUrls: ['./fwdpg.component.scss', '../_Button.scss']
})
export class FwdpgComponent {
  @Input() color: string;

  constructor(private location: Location) { }

  goForward() {
    this.location.forward();
  }

}
