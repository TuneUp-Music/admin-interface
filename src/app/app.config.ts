import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from "@angular/common/http";

import { appRoutes } from "./app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync(),
  ],
};
