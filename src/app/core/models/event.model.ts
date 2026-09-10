export type EventCategory = 'Pooja' | 'Cultural' | 'Youth' | 'Community' | 'Festival Day';

export interface FestivalEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image?: string;
  category: EventCategory;
}
