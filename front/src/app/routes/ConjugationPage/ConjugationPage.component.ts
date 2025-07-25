import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-ConjugationPage',
  templateUrl: './ConjugationPage.component.html',
  styleUrls: ['./ConjugationPage.component.css'],
  imports: [CommonModule]
})
export class ConjugationPageComponent implements OnInit {
  activeChoice: 'verbs' | 'adjectives' | '' = 'verbs';

  ngOnInit(): void {
    this.activeChoice = 'verbs';
  }

  setActive(choice: 'verbs' | 'adjectives') {
    this.activeChoice = choice;
  }
}
