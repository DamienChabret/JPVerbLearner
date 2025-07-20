import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-verbPage',
  templateUrl: './verbPage.component.html',
  styleUrls: ['./verbPage.component.css']
})
export class VerbPageComponent implements OnInit {
  @Input() verb! : string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.verb = this.route.snapshot.paramMap.get('verb');
  }

}
