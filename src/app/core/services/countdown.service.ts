import { Injectable } from '@angular/core';
import { Observable, interval, map, startWith } from 'rxjs';

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
}

@Injectable({ providedIn: 'root' })
export class CountdownService {
  /** Returns a live-updating countdown stream to the given target date. */
  countdownTo(target: Date): Observable<CountdownValue> {
    return interval(1000).pipe(
      startWith(0),
      map(() => this.diff(target))
    );
  }

  private diff(target: Date): CountdownValue {
    const now = new Date().getTime();
    const distance = target.getTime() - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isFinished: false };
  }
}
