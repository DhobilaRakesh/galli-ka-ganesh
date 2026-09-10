import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountdownService, CountdownValue } from '../../../core/services/countdown.service';

@Component({
  selector: 'gkg-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent implements OnInit {
  @Input({ required: true }) targetDate!: Date;
  @Input() theme: 'light' | 'dark' = 'dark';

  countdown$!: Observable<CountdownValue>;

  constructor(private countdownService: CountdownService) {}

  ngOnInit(): void {
    this.countdown$ = this.countdownService.countdownTo(this.targetDate);
  }

  pad(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
