import { Component, EventEmitter, Input, Output } from '@angular/core';

type Lang = 'en' | 'ru';

type MenuLabels = {
  materials: string;
  projects: string;
  contact: string;
  language: string;
  theme: string;
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
  @Input() darkThemeEnabled = false;
  @Output() langChange = new EventEmitter<Lang>();
  @Output() themeToggle = new EventEmitter<void>();

  setLang(lang: Lang) {
    this.langChange.emit(lang);
  }

  toggleTheme() {
    this.themeToggle.emit();
  }

  anchorHref(fragment: 'top' | 'materials' | 'projects' | 'contact'): string {
    return `?lang=${this.currentLang}#${fragment}`;
  }
}
