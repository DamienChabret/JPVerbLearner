import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormValues } from '@models/ValueFormInterface';
import { VerbService } from '@services/VerbService';

@Component({
  selector: 'app-QuizzPage',
  templateUrl: './QuizzPage.component.html',
  styleUrls: ['./QuizzPage.component.css']
})
export class QuizzPageComponent implements OnInit {

  formValues! : FormValues;
  private verbService! : VerbService;
  
  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    this.verbService = new VerbService();
    const raw = this.route.snapshot.queryParams['data'];
    if (raw) {
      this.formValues = JSON.parse(raw);
      console.log(this.formValues);
    };

    var verbs = await this.verbService.getVerbsByFilter(this.formValues);
    console.log(verbs);
  }

}
