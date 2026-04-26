import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, map, shareReplay } from 'rxjs';
import { Lang } from '../content.config';

type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

type SkillDictionary = Record<Lang, SkillGroup[]>;

export type CoreSkillsCopy = {
  eyebrow: string;
  title: string;
  lead: string;
};

@Component({
  selector: 'app-core-skills-section',
  imports: [AsyncPipe],
  templateUrl: './core-skills-section.component.html',
  styleUrl: './core-skills-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreSkillsSectionComponent {
  readonly currentLang = input.required<Lang>();
  readonly copy = input.required<CoreSkillsCopy>();

  private readonly http = inject(HttpClient);
  private readonly skillsContent$ = this.http.get<SkillDictionary>('assets/core-skills.json').pipe(shareReplay({ bufferSize: 1, refCount: true }));

  readonly skillGroups$ = combineLatest([this.skillsContent$, toObservable(this.currentLang)]).pipe(
    map(([content, lang]) => content[lang] ?? [])
  );
}
