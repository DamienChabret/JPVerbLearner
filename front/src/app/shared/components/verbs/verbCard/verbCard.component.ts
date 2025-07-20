import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VerbGroupEnum } from '@models/VerbGroupeEnum';
import { JLPTLevelEnum } from '@models/JlptLevelEnum';
import { VerbModel } from '@models/VerbModel';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-verb',
  templateUrl: './verbCard.component.html',
  styleUrls: ['./verbCard.component.css']
})
export class VerbCardComponent implements OnInit {
  @Input() verb_model! : VerbModel; 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateOnVerbPage() {
    this.router.navigate(['/verbs/', this.verb_model.id]);
  }

}
