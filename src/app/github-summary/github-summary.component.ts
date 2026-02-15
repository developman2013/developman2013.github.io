import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-summary',
  imports: [],
  templateUrl: './github-summary.component.html',
  styleUrl: './github-summary.component.css'
})
export class GithubSummaryComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) lead!: string;
  @Input({ required: true }) openProfileLabel!: string;
  @Input({ required: true }) summaryUrl!: string;
  @Input({ required: true }) profileUrl!: string;
}
