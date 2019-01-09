import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  ProjFolio = 'All Projects and Portfolios';
  E8 = 'Environmet Eight';
  FaHW = 'Fourty-Art Hour Weekeds';
  SoS = 'Summers of Script';
  constructor() { }

  ngOnInit() {
  }

}
