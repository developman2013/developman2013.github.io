import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() telegramLabel: string = 'Telegram';
  @Input() emailLabel: string = 'Email';
  @Output() telegramClick = new EventEmitter<void>();
  @Output() emailClick = new EventEmitter<void>();

  onTelegramClick() {
    this.telegramClick.emit();
  }

  onEmailClick() {
    this.emailClick.emit();
  }
}
