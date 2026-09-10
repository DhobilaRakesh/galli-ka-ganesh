import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { GalleryImage } from '../../../core/models/gallery.model';

@Component({
  selector: 'gkg-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss',
})
export class LightboxComponent {
  @Input({ required: true }) images: GalleryImage[] = [];
  @Input({ required: true }) activeIndex = 0;
  @Output() closed = new EventEmitter<void>();
  @Output() indexChange = new EventEmitter<number>();

  get active(): GalleryImage | null {
    return this.images[this.activeIndex] ?? null;
  }

  close(): void {
    this.closed.emit();
  }

  next(event?: Event): void {
    event?.stopPropagation();
    const nextIndex = (this.activeIndex + 1) % this.images.length;
    this.indexChange.emit(nextIndex);
  }

  prev(event?: Event): void {
    event?.stopPropagation();
    const prevIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
    this.indexChange.emit(prevIndex);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  @HostListener('document:keydown.arrowRight')
  onRight(): void {
    this.next();
  }

  @HostListener('document:keydown.arrowLeft')
  onLeft(): void {
    this.prev();
  }
}
