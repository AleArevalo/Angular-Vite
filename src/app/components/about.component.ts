import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
        <p> hello, this is about us page </p>
        {{ fullName() }} <button (click)="setName('John')">Click</button>
    `,
})

export class AboutComponent {
    firstName = signal('Jane');
    lastName = signal('Doe');
    fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

    constructor() {
        effect(() => console.log('Name changed:', this.fullName()));
    }

    setName(newName: string) {
        this.firstName.set(newName);
    }
}