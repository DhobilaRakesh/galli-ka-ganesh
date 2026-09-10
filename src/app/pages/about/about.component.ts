import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FESTIVAL_CONFIG } from '../../core/constants/app.constants';
import { DataService } from '../../core/services/data.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'gkg-about',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly festival = FESTIVAL_CONFIG;
  readonly members;
  readonly achievements;
  readonly defaultAvatar = 'assets/images/association/user.png';

  /** Members grid starts collapsed to this many, with a "Show More" reveal. */
  private readonly initialMemberCount = 6;
  showAllMembers = false;

  readonly activities = [
    { icon: '🎨', title: 'Mandap Decoration', desc: 'Designing and building the festival mandap each year.' },
    { icon: '🎭', title: 'Cultural Programs', desc: 'Organizing dance, music and drama events for the community.' },
    { icon: '🩸', title: 'Blood Donation Camps', desc: 'Running annual health and blood donation drives.' },
    { icon: '🌱', title: 'Eco-Friendly Initiatives', desc: 'Promoting eco-friendly idols and plastic-free festivities.' },
    { icon: '🍛', title: 'Community Feasts', desc: 'Serving free prasadam and meals to hundreds of devotees.' },
    { icon: '🤝', title: 'Village Welfare', desc: 'Supporting local welfare and volunteering initiatives year-round.' },
  ];

  constructor(private dataService: DataService) {
    this.members = this.dataService.getMembers();
    this.achievements = this.dataService.getAchievements();
  }

  get visibleMembers() {
    return this.showAllMembers ? this.members : this.members.slice(0, this.initialMemberCount);
  }

  get hasMoreMembers(): boolean {
    return this.members.length > this.initialMemberCount;
  }

  toggleMembers(): void {
    this.showAllMembers = !this.showAllMembers;
  }

  /** Swaps a member's photo to the default avatar if it's missing or fails to load. */
  onMemberImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img && img.src.indexOf(this.defaultAvatar) === -1) {
      img.src = this.defaultAvatar;
    }
  }
}
