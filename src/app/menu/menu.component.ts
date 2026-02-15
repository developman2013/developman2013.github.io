import { Component, EventEmitter, Input, Output } from '@angular/core';

type Lang = 'en' | 'ru';

type MenuLabels = {
  materials: string;
  projects: string;
  contact: string;
  language: string;
};

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input({ required: true }) labels!: MenuLabels;
  @Input() currentLang: Lang = 'en';
  @Output() langChange = new EventEmitter<Lang>();

  setLang(lang: Lang) {
    this.langChange.emit(lang);
  }

  anchorHref(fragment: 'top' | 'materials' | 'projects' | 'contact'): string {
    return `?lang=${this.currentLang}#${fragment}`;
  }
}
