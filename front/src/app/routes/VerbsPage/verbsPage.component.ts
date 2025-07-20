import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerbComponent } from '../../shared/components/verbs/verb/verb.component';
import { JLPTLevelEnum } from '../../shared/utils/JlptLevelEnum';
import { VerbGroupEnum } from '../../shared/utils/VerbGroupeEnum';
import { VerbModel } from '../../shared/utils/VerbModel';

@Component({
  standalone: true,
  selector: 'app-verbs',
  templateUrl: './verbsPage.component.html',
  styleUrls: ['./verbsPage.component.css'],
  imports: [VerbComponent, CommonModule]
})
export class VerbsPageComponent implements OnInit {
  group : VerbGroupEnum= VerbGroupEnum.GROUPE_1;
  level : JLPTLevelEnum= JLPTLevelEnum.JPLT_N5;
  constructor() { }

  ngOnInit() {
  }
  
  getListVerbs(): VerbModel[] {
    return [
      new VerbModel('Manger', '食べる', 'たべる', 'taberu', VerbGroupEnum.GROUPE_2, JLPTLevelEnum.JPLT_N5),
      new VerbModel('Boire', '飲む', 'のむ', 'nomu', VerbGroupEnum.GROUPE_1, JLPTLevelEnum.JPLT_N5),
      new VerbModel('Faire', 'する', 'する', 'suru', VerbGroupEnum.GROUPE_3, JLPTLevelEnum.JPLT_N5),
      new VerbModel('Aller', '行く', 'いく', 'iku', VerbGroupEnum.GROUPE_1, JLPTLevelEnum.JPLT_N5),
      new VerbModel('Voir', '見る', 'みる', 'miru', VerbGroupEnum.GROUPE_2, JLPTLevelEnum.JPLT_N5),
      new VerbModel('Venir', '来る', 'くる', 'kuru', VerbGroupEnum.GROUPE_3, JLPTLevelEnum.JPLT_N5)
    ];
  }
}
