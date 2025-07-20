import { Routes } from '@angular/router';
import { VerbsPageComponent } from './routes/VerbsPage/verbsPage.component';
import { VerbPageComponent } from './routes/VerbPage/verbPage.component';
import { DashboardPageComponent } from './routes/DashboardPage/dashboardPage.component';

export const routes: Routes = [
   { path: '', component: DashboardPageComponent },
   { path: 'verbs', component: VerbsPageComponent },
   { path: 'verbs/:verb', component: VerbPageComponent}
];
