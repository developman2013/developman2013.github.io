import { Component, EventEmitter, Input, OnChanges, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './card.component.css'
})
export class CardComponent implements OnChanges {
  @Input() header: string = '';
  @Input() description: string = '';
  @Input() imgUrl: string = '';
  @Input() extUrl: string = '';
  @Input() tag: string = '';
  @Input() ctaLabel: string = 'Open source';
  @Output() ctaClick = new EventEmitter<string>();

  public descriptionArr: string[] = [];

  ngOnChanges() {
    this.descriptionArr = this.description
      .split('\n')
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
  }

  onCtaClick() {
    if (this.extUrl) {
      this.ctaClick.emit(this.tag);
    }
  }
}
