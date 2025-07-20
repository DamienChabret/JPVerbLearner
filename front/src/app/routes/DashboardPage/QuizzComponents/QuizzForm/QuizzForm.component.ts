import { Component, OnInit } from '@angular/core';
import { JLPTLevelEnum } from '@models/JlptLevelEnum';
import { VerbGroupEnum } from '@models/VerbGroupeEnum';
import { EnumHelper } from '@utils/EnumHelper';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-QuizzForm',
  templateUrl: './QuizzForm.component.html',
  styleUrls: ['./QuizzForm.component.css'],
  imports: [CommonModule],
})
export class QuizzFormComponent implements OnInit {
  listGroupEnums : any = {};
  listLevelEnums : any = {};
  constructor() { }

  ngOnInit() {
    this.listGroupEnums = EnumHelper.getEntries(VerbGroupEnum);
    this.listLevelEnums = EnumHelper.getEntries(JLPTLevelEnum);
  }
}
