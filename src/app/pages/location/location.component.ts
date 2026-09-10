import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FESTIVAL_CONFIG } from '../../core/constants/app.constants';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'gkg-location',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  readonly festival = FESTIVAL_CONFIG;
  readonly mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const query = encodeURIComponent(FESTIVAL_CONFIG.mapsQuery);
    const embedUrl = `https://www.google.com/maps?q=${query}&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
