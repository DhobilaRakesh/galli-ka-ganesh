import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FESTIVAL_CONFIG } from '../../core/constants/app.constants';
import { DataService } from '../../core/services/data.service';
import { CountdownComponent } from '../../shared/components/countdown/countdown.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'gkg-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CountdownComponent, SectionTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly festival = FESTIVAL_CONFIG;
  readonly latestUpdate;
  readonly quickLinks = [
    { icon: '🪔', title: 'Daily Pooja', desc: 'View the full pooja & aarti timings', path: '/daily-pooja' },
    { icon: '🎉', title: 'Programs & Events', desc: 'Explore festival day schedules', path: '/programs' },
    { icon: '📸', title: 'Gallery', desc: 'Relive past celebrations', path: '/gallery' },
    { icon: '👥', title: 'About Us', desc: 'Meet the Friends Youth Association', path: '/about' },
  ];

  constructor(private dataService: DataService) {
    this.latestUpdate = this.dataService.getUpdates().find((u) => u.isImportant) ?? this.dataService.getUpdates()[0];
  }
}
