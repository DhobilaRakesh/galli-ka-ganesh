export type GalleryCategory =
  | 'Ganesh Idol'
  | 'Pooja Celebrations'
  | 'Mandap Decoration'
  | 'Cultural Programs'
  | 'Youth Association'
  | 'Community Events'
  | 'Previous Years';

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
}
