// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-back',
//   templateUrl: './back.component.html',
//   styleUrls: ['./back.component.scss']
// })
// export class BackComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-back',
  templateUrl: './back.component.html',
})
export class BackComponent {
  @Input() color: string;

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
