import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';

import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MenuComponent, CardComponent, ContactComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pirahouski-app';
}
