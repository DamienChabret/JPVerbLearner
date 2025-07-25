import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerbModel } from '@models/VerbModel';
import { VerbService } from '@services/VerbService';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-verbPage',
  templateUrl: './verbPage.component.html',
  styleUrls: ['./verbPage.component.css'],
  imports: [CommonModule],
})
export class VerbPageComponent implements OnInit {
  verb!: VerbModel;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    const verbId = Number(this.route.snapshot.paramMap.get('verb'));
    console.log(verbId);
    if (verbId != null) {
      this.verb = await new VerbService().getVerb(verbId);
      console.log(this.verb);
    }
  }
}
