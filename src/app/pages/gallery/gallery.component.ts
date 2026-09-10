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

  constructor(private dataService: DataService) {
    this.allImages = this.dataService.getGalleryImages();
    this.categories = ['All', ...new Set(this.allImages.map((i) => i.category))];
  }

  get filteredImages(): GalleryImage[] {
    if (this.activeCategory === 'All') return this.allImages;
    return this.allImages.filter((img) => img.category === this.activeCategory);
  }

  setCategory(cat: GalleryCategory | 'All'): void {
    this.activeCategory = cat;
    this.lightboxIndex = null;
  }

  openLightbox(index: number): void {
    this.lightboxIndex = index;
  }

  closeLightbox(): void {
    this.lightboxIndex = null;
  }
}
