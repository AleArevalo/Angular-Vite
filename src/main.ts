import "@angular/compiler";
import "zone.js";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule) // Inicia la aplicación con AppModule
  .catch(err => console.error(err));