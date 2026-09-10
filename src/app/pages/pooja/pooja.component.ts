import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'gkg-pooja',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './pooja.component.html',
  styleUrl: './pooja.component.scss',
})
export class PoojaComponent {
  readonly schedule;

  constructor(private dataService: DataService) {
    this.schedule = this.dataService.getPoojaSchedule();
  }
}
