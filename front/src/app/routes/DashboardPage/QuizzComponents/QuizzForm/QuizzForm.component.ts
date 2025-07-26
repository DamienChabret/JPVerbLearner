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
import { VerbService } from '@services/VerbService';

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
    private localStorageService: LocalStorageService,
    private verbService: VerbService
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

  startQuizz() {
    if (!this.isFormValid()) {
      this.notificationService.error(
        'Au moins une valeure par catégorie doit-être choisi.'
      );
    } else {
      this.localStorageService.saveData('formValues', this.formValues);
      
      this.router.navigate(['/quizz'], {
        queryParams: {
          formValues: JSON.stringify(this.formValues)
        },
      });
    }
  }

  isFormValid(): boolean {
    let isValid = true;

    // Vérifie qu'au moins une valeur est true dans groupValue
    if (!Object.values(this.formValues.groupValue).some(value => value)) {
      isValid = false;
    }

    // Vérifie qu'au moins une valeur est true dans levelValue
    if (!Object.values(this.formValues.levelValue).some(value => value)) {
      isValid = false;
    }

    // Vérifie qu'au moins une valeur est true dans politessValue
    if (!Object.values(this.formValues.politessValue).some(value => value)) {
      isValid = false;
    }

    // Vérifie qu'au moins une valeur est true dans formValue
    if (!Object.values(this.formValues.formValue).some(value => value)) {
      isValid = false;
    }

    // Vérifie qu'au moins une valeur est true dans revisionsValue
    if (!Object.values(this.formValues.revisionsValue).some(value => value)) {
      isValid = false;
    }

    return isValid;
  }
}
