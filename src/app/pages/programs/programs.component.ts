import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { EventCategory, FestivalEvent } from '../../core/models/event.model';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'gkg-programs',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
})
export class ProgramsComponent {
  readonly allEvents: FestivalEvent[];
  readonly categories: Array<EventCategory | 'All'> = [
    'All',
    'Festival Day',
    'Pooja',
    'Cultural',
    'Youth',
    'Community',
  ];
  activeCategory: EventCategory | 'All' = 'All';

  constructor(private dataService: DataService) {
    this.allEvents = this.dataService.getEvents();
  }

  get filteredEvents(): FestivalEvent[] {
    if (this.activeCategory === 'All') return this.allEvents;
    return this.allEvents.filter((e) => e.category === this.activeCategory);
  }

  setCategory(cat: EventCategory | 'All'): void {
    this.activeCategory = cat;
  }

  categoryIcon(cat: EventCategory): string {
    const map: Record<EventCategory, string> = {
      Pooja: '🙏',
      Cultural: '🎭',
      Youth: '🧑‍🤝‍🧑',
      Community: '🤝',
      'Festival Day': '🎊',
    };
    return map[cat];
  }
}
