import { Routes } from '@angular/router';
import { VerbsPageComponent } from '@routes/VerbsPage/verbsPage.component';
import { VerbPageComponent } from '@routes/VerbPage/verbPage.component';
import { DashboardPageComponent } from '@routes/DashboardPage/dashboardPage.component';
import { ConjugationPageComponent } from '@routes/ConjugationPage/ConjugationPage.component';
import { AdjectivesPageComponent } from '@routes/AdjectivesPage/AdjectivesPage.component';
import { AdjectivePageComponent } from '@routes/AdjectivePage/AdjectivePage.component';
import { QuizzPageComponent } from '@routes/QuizzPage/QuizzPage.component';

export const routes: Routes = [
   { path: '', component: DashboardPageComponent },
   { path: 'verbs', component: VerbsPageComponent },
   { path: 'verbs/:verb', component: VerbPageComponent},
   { path: 'adjectives', component: AdjectivesPageComponent},
   { path: 'adjectives/:adjective', component: AdjectivePageComponent},
   { path: 'conjugation', component: ConjugationPageComponent},
   { path: 'quizz', component: QuizzPageComponent }
];
