import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
  inject,
  input,
  signal
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, map, shareReplay } from 'rxjs';
import { Lang } from '../content.config';

type ExperienceItem = {
  period: string;
  role: string;
  project: string;
  summary: string;
  highlights: string[];
  stack: string[];
  tag: string;
};

type ExperienceDictionary = Record<Lang, ExperienceItem[]>;

export type ExperienceSectionCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  highlightsLabel: string;
  stackLabel: string;
};

@Component({
  selector: 'app-experience-section',
  imports: [AsyncPipe],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceSectionComponent implements AfterViewInit, OnDestroy {
  readonly currentLang = input.required<Lang>();
  readonly copy = input.required<ExperienceSectionCopy>();
  readonly activeTag = signal<string | null>(null);

  @ViewChildren('experienceCard', { read: ElementRef })
  private readonly cards!: QueryList<ElementRef<HTMLElement>>;

  private readonly http = inject(HttpClient);
  private readonly experienceContent$ = this.http.get<ExperienceDictionary>('assets/experience.json').pipe(shareReplay({ bufferSize: 1, refCount: true }));
  private observer: IntersectionObserver | null = null;

  readonly experienceItems$ = combineLatest([this.experienceContent$, toObservable(this.currentLang)]).pipe(
    map(([content, lang]) => content[lang] ?? [])
  );

  ngAfterViewInit() {
    this.observeCards();
    this.cards.changes.subscribe(() => this.observeCards());
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private observeCards() {
    this.observer?.disconnect();

    if (typeof IntersectionObserver === 'undefined') {
      this.activeTag.set(this.cards.first?.nativeElement.dataset['experienceTag'] ?? null);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        const activeTag = activeEntry?.target instanceof HTMLElement ? activeEntry.target.dataset['experienceTag'] ?? null : null;
        if (activeTag) {
          this.activeTag.set(activeTag);
        }
      },
      {
        rootMargin: '-28% 0px -42% 0px',
        threshold: [0.2, 0.45, 0.7]
      }
    );

    this.cards.forEach((card) => this.observer?.observe(card.nativeElement));
    this.activeTag.set(this.cards.first?.nativeElement.dataset['experienceTag'] ?? null);
  }
}
