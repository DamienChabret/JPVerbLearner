import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JLPTLevelEnum } from '@models/JlptLevelEnum';
import { VerbGroupEnum } from '@models/VerbGroupeEnum';
import { EnumHelper } from '@utils/EnumHelper';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValues } from '@models/ValueFormInterface';
import { NotificationService } from '@utils/NotificationManager';
import { LocalStorageService } from '@utils/LocalStorageService';

@Component({
  standalone: true,
  selector: 'app-QuizzForm',
  templateUrl: './QuizzForm.component.html',
  styleUrls: ['./QuizzForm.component.css'],
  imports: [CommonModule, MatCheckboxModule, FormsModule],
})
export class QuizzFormComponent implements OnInit {
  objectKeys = Object.keys;
  listGroupEnums: any = {};
  listLevelEnums: any = {};

  formValues!: FormValues;

  @Output() closeQuizzFormEvent = new EventEmitter();

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.listGroupEnums = EnumHelper.getEntries(VerbGroupEnum);
    this.listLevelEnums = EnumHelper.getEntries(JLPTLevelEnum);
    const groupValueInit = this.listGroupEnums.reduce(
      (acc: any, item: { key: string; value: string }) => {
        acc[item.value] = false;
        return acc;
      },
      {}
    );

    const levelValueInit = this.listLevelEnums
      .reverse()
      .reduce((acc: any, item: { key: string; value: string }) => {
        acc[item.value] = false;
        return acc;
      }, {});

    this.formValues = {
      groupValue: groupValueInit,
      levelValue: levelValueInit,
      politessValue: {
        polite: false,
        neutral: false,
      },
      formValue: {
        present: false,
        past: false,
        basic: false,
        te: false,
        potential: false,
        volitive: false,
        passive: false,
        causative: false,
        conditional: false,
        progressive: false,
      },
      revisionsValue: {
        dos: false,
        face: false,
      },
    };
    let formValuesStorage = this.localStorageService.getData('formValues');
    if (formValuesStorage != null) {
      this.formValues = formValuesStorage;
    }
  }

  closeQuizzForm() {
    this.closeQuizzFormEvent.emit();
  }

  startQuizz(): any {
    const mappedValue = this.mapValueForAPI();
    if (!this.isFormValid(mappedValue)) {
      this.notificationService.error(
        'Au moins une valeure par catégorie doit-être choisi.'
      );
    } else {
      this.localStorageService.saveData('formValues', this.formValues);
      this.router.navigate(['/quizz'], {
        queryParams: {
          data: JSON.stringify(mappedValue),
        },
      });
    }
  }

  isFormValid(mappedValue: any): boolean {
    let isValid = true;
    if ((mappedValue.groupValue as Array<string>).length < 1) {
      isValid = false;
    }

    if ((mappedValue.levelValue as Array<String>).length < 1) {
      isValid = false;
    }

    if ((mappedValue.politessValue as Array<String>).length < 1) {
      isValid = false;
    }

    if ((mappedValue.revisionsValue as Array<String>).length < 1) {
      isValid = false;
    }

    if ((mappedValue.formValue as Array<String>).length < 1) {
      isValid = false;
    }

    return isValid;
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

    // Pour le reste, filtrer aussi uniquement les clés à true
    const filterTrueKeys = (
      obj: Record<string, boolean> | undefined
    ): string[] => {
      if (!obj) return [];
      return Object.keys(obj).filter((k) => obj[k]);
    };

    const formValuesMapped = {
      groupValue: mappedGroupValue, // liste de string des groupes sélectionnés
      levelValue: mappedLevelValue, // liste de string des niveaux sélectionnés
      politessValue: filterTrueKeys(this.formValues.politessValue),
      formValue: filterTrueKeys(this.formValues.formValue),
      revisionsValue: filterTrueKeys(this.formValues.revisionsValue),
    };
    return formValuesMapped;
  }
}
