import { ChangeDetectionStrategy, Component } from '@angular/core';

import './app.component.css';

@Component({
    selector: 'app-root',
    templateUrl: '/src/app/app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent { }