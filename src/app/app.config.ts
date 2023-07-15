import { InjectionToken } from '@angular/core';

export interface AppConfig {
	title: string;
}

export const appConfig: AppConfig = {
	title: "App Config"
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');