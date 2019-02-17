import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  ProjFolio = 'Portfolio Gallery';
  E8 = 'Environmet Eight';
  FaHW = 'Fourty-Art Hour Weekeds';
  SoS = 'Summers of Script';
  constructor() { }

  ngOnInit() {
  }

}
