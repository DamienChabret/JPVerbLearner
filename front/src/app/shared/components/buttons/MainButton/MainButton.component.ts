import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-MainButton',
  templateUrl: './MainButton.component.html',
  styleUrls: ['./MainButton.component.css'],
})
export class MainButtonComponent implements OnInit {
  @Input() text = '';
  @Output() isClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendEvent() {
    this.isClicked.emit();
  }
}
