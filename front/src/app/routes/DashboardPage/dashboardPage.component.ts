import { Component, OnInit } from '@angular/core';
import { MainButtonComponent } from '@components/buttons/MainButton/MainButton.component';
import { QuizzFormComponent } from './QuizzComponents/QuizzForm/QuizzForm.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboardPage.component.html',
  styleUrls: ['./dashboardPage.component.css'],
  imports: [MainButtonComponent, QuizzFormComponent, CommonModule],
})
export class DashboardPageComponent implements OnInit {

  displayQuizzForm: boolean = true;
  quizzType: string = ""; // quizz ou train

  constructor() { }

  ngOnInit() {
  }

  showQuizzForm(quizzType : string) {
    console.log(quizzType);
    this.quizzType = quizzType;
    this.displayQuizzForm = !this.displayQuizzForm;
  }

  hideQuizzForm() {
    this.quizzType = "";
    this.displayQuizzForm = !this.displayQuizzForm;
  }

}
