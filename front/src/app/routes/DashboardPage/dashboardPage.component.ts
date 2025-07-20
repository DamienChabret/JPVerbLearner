import { Component, OnInit } from '@angular/core';
import { MainButtonComponent } from '../../shared/components/buttons/MainButton/MainButton.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboardPage.component.html',
  styleUrls: ['./dashboardPage.component.css'],
  imports: [MainButtonComponent],
})
export class DashboardPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
