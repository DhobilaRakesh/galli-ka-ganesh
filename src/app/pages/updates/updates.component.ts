import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'gkg-updates',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.scss',
})
export class UpdatesComponent {
  readonly updates;

  constructor(private dataService: DataService) {
    this.updates = this.dataService.getUpdates();
  }
}
