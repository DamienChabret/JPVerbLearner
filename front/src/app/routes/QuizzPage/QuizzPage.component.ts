import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { JLPTLevelEnum } from '@models/JlptLevelEnum';
import { FormValues } from '@models/ValueFormInterface';
import { VerbGroupEnum } from '@models/VerbGroupeEnum';
import { VerbModel } from '@models/VerbModel';
import { VerbService } from '@services/VerbService';
import { EnumHelper } from '@utils/EnumHelper';

@Component({
  selector: 'app-QuizzPage',
  templateUrl: './QuizzPage.component.html',
  styleUrls: ['./QuizzPage.component.css'],
})
export class QuizzPageComponent implements OnInit {
  formValues!: FormValues;
  verbs!: VerbModel[];

  constructor(private route: ActivatedRoute, private verbService: VerbService) {}

  async ngOnInit() {
    this.verbService = new VerbService();

    const rawFormValues = this.route.snapshot.queryParams['formValues'];
     if (rawFormValues) {
      this.formValues = JSON.parse(rawFormValues);
      const valueForAPI = this.mapValueForAPI()
      console.log("ouuuuuuuuh", valueForAPI)
      this.verbs = await this.verbService.getVerbsByFilter(valueForAPI);
    }

    console.log(this.verbs);
    console.log(this.formValues);
  }

  mapValueForAPI(): any {
    // Filtrer et garder uniquement les clés avec true
    const mappedGroupValue: string[] = [];
    for (const label in this.formValues.groupValue) {
      const key = EnumHelper.getKeyByValue(VerbGroupEnum, label);
      if (key && this.formValues.groupValue[label]) {
        mappedGroupValue.push(key);
      }
    }

    const mappedLevelValue: string[] = [];
    for (const label in this.formValues.levelValue) {
      const key = EnumHelper.getKeyByValue(JLPTLevelEnum, label);
      if (key && this.formValues.levelValue[label]) {
        mappedLevelValue.push(key);
      }
    }

    const formValuesMapped = {
      groupValue: mappedGroupValue,
      levelValue: mappedLevelValue,
    };
    return formValuesMapped;
  }
}
