import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerbCardComponent } from '@components/verbs/verbCard/verbCard.component';
import { JLPTLevelEnum } from '@models/JlptLevelEnum';
import { VerbGroupEnum } from '@models/VerbGroupeEnum';
import { VerbModel } from '@models/VerbModel';
import { VerbService } from '@services/VerbService';

@Component({
  standalone: true,
  selector: 'app-verbs',
  templateUrl: './verbsPage.component.html',
  styleUrls: ['./verbsPage.component.css'],
  imports: [VerbCardComponent, CommonModule]
})
export class VerbsPageComponent implements OnInit {
  verbList: VerbModel[] = [];

  constructor() { }

  async ngOnInit() {
    this.verbList = await new VerbService().getVerbs();
    console.log(this.verbList)
  }
}
