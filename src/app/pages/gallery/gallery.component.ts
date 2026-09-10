import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { GalleryCategory, GalleryImage } from '../../core/models/gallery.model';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { LightboxComponent } from '../../shared/components/lightbox/lightbox.component';

@Component({
  selector: 'gkg-gallery',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, LightboxComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  readonly allImages: GalleryImage[];
  readonly categories: Array<GalleryCategory | 'All'>;
  activeCategory: GalleryCategory | 'All' = 'All';
  lightboxIndex: number | null = null;

  /** Gallery grid starts collapsed to this many, with a "Show More" reveal. */
  private readonly initialImageCount = 6;
  showAllImages = false;

  constructor(private dataService: DataService) {
    this.allImages = this.dataService.getGalleryImages();
    this.categories = ['All', ...new Set(this.allImages.map((i) => i.category))];
  }

  get filteredImages(): GalleryImage[] {
    if (this.activeCategory === 'All') return this.allImages;
    return this.allImages.filter((img) => img.category === this.activeCategory);
  }

  get visibleImages(): GalleryImage[] {
    return this.showAllImages
      ? this.filteredImages
      : this.filteredImages.slice(0, this.initialImageCount);
  }

  get hasMoreImages(): boolean {
    return this.filteredImages.length > this.initialImageCount;
  }

  get remainingImagesCount(): number {
    return Math.max(this.filteredImages.length - this.initialImageCount, 0);
  }

  setCategory(cat: GalleryCategory | 'All'): void {
    this.activeCategory = cat;
    this.lightboxIndex = null;
    this.showAllImages = false;
  }

  toggleImages(): void {
    this.showAllImages = !this.showAllImages;
  }

  openLightbox(index: number): void {
    this.lightboxIndex = index;
  }

  closeLightbox(): void {
    this.lightboxIndex = null;
  }
}
