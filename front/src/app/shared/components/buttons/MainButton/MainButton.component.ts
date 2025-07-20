import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-MainButton',
  templateUrl: './MainButton.component.html',
  styleUrls: ['./MainButton.component.css']
})
export class MainButtonComponent implements OnInit {
  @Input() text = "";

  constructor() { }

  ngOnInit() {
  }

}
