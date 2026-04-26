import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
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
export class ExperienceSectionComponent {
  readonly currentLang = input.required<Lang>();
  readonly copy = input.required<ExperienceSectionCopy>();

  private readonly http = inject(HttpClient);
  private readonly experienceContent$ = this.http.get<ExperienceDictionary>('assets/experience.json').pipe(shareReplay({ bufferSize: 1, refCount: true }));

  readonly experienceItems$ = combineLatest([this.experienceContent$, toObservable(this.currentLang)]).pipe(
    map(([content, lang]) => content[lang] ?? [])
  );
}
