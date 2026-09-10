import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'gkg-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-head text-center">
      <span class="eyebrow" *ngIf="eyebrow">{{ eyebrow }}</span>
      <h2 class="section-title">{{ title }}</h2>
      <div class="motif-divider"></div>
      <p class="section-subtitle" *ngIf="subtitle">{{ subtitle }}</p>
    </div>
  `,
  styles: [
    `
      .section-head {
        margin-bottom: 44px;
      }
    `,
  ],
})
export class SectionTitleComponent {
  @Input() eyebrow = '';
  @Input({ required: true }) title!: string;
  @Input() subtitle = '';
}
