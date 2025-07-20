import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VerbGroupEnum } from '../../../utils/VerbGroupeEnum';
import { JLPTLevelEnum } from '../../../utils/JlptLevelEnum';
import { VerbModel } from '../../../utils/VerbModel';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.css']
})
export class VerbComponent implements OnInit {
  @Input() verb_model! : VerbModel; 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateOnVerbPage() {
    this.router.navigate(['/verbs/', this.verb_model.romaji]);
  }

}
