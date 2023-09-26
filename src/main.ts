import "@angular/compiler";
import "zone.js";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRouting } from "./app/app.routing";
bootstrapApplication(AppComponent, {providers: [...appRouting]});