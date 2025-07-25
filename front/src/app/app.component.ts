import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotificationContainerComponent } from '@components/notifications/notificationContainer/notificationContainer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    NotificationContainerComponent,
  ],
  template: `
    <app-header></app-header>
    <div class="page-wrapper">
      <div class="content-padding">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
    <app-notification-container></app-notification-container>
  `,
  styles: [
    `
      .page-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow-x: hidden;
      }

      .content-padding {
        flex: 1;
        margin-right: 30px;
        margin-left: 30px;
      }
    `,
  ],
})
export class AppComponent {}
