export interface InAppNotification {
  id: string;
  type: AppNotificationType;
  message: string;
  duration?: number; // en ms, optionnel pour les toasts temporisés
}

export enum AppNotificationType {
  SUCCESS = 'Success',
  ERROR = 'Error',
  INFO = 'Info',
  WARNING = 'Warning',
}
