import { Injectable } from '@angular/core';
import { PoojaSchedule } from '../models/pooja.model';
import { FestivalEvent } from '../models/event.model';
import { GalleryImage } from '../models/gallery.model';
import { FestivalUpdate } from '../models/update.model';
import { AssociationMember, Achievement } from '../models/member.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  getPoojaSchedule(): PoojaSchedule[] {
    return [
      {
        id: 1,
        title: 'Morning Pooja',
        time: '6:00 AM – 7:00 AM',
        description: 'Abhishekam and morning rituals performed with devotion to begin the day.',
        icon: '🌅',
      },
      {
        id: 2,
        title: 'Ganesh Aarti',
        time: '7:30 AM – 8:00 AM',
        description: 'Morning aarti with bhajans, accompanied by dhol and community singing.',
        icon: '🪔',
      },
      {
        id: 3,
        title: 'Special Pooja',
        time: '11:00 AM – 12:30 PM',
        description: 'Special sankalpa pooja with 108 modak/naivedyam offering to Lord Ganesha.',
        icon: '🙏',
        isSpecial: true,
      },
      {
        id: 4,
        title: 'Afternoon Prasadam',
        time: '1:00 PM – 2:00 PM',
        description: 'Community prasadam distribution for all visiting devotees.',
        icon: '🍛',
      },
      {
        id: 5,
        title: 'Evening Aarti',
        time: '6:30 PM – 7:30 PM',
        description: 'Grand evening aarti with lamps, conch and community participation.',
        icon: '🔥',
      },
      {
        id: 6,
        title: 'Cultural Programs',
        time: '8:00 PM – 10:00 PM',
        description: 'Youth-led cultural performances — dance, music and devotional drama.',
        icon: '🎭',
      },
    ];
  }

  getEvents(): FestivalEvent[] {
    return [
      {
        id: 1,
        title: 'Ganesh Chaturthi – Idol Installation',
        date: 'Sep 14, 2026',
        time: '6:00 AM',
        description:
          'Grand installation of the Ganesh idol at the mandap with vedic rituals and community celebration.',
        category: 'Festival Day',
      },
      {
        id: 2,
        title: 'Maha Sankalpa Pooja',
        date: 'Sep 15, 2026',
        time: '11:00 AM',
        description: 'Special sankalpa pooja performed by senior priests with full village participation.',
        category: 'Pooja',
      },
      {
        id: 3,
        title: 'Youth Talent Night',
        date: 'Sep 17, 2026',
        time: '7:30 PM',
        description: 'An evening of music, dance and drama performed entirely by the youth association members.',
        category: 'Youth',
      },
      {
        id: 4,
        title: 'Community Bhojanam (Feast)',
        date: 'Sep 19, 2026',
        time: '1:00 PM',
        description: 'Free community lunch prepared and served by volunteers for the entire village.',
        category: 'Community',
      },
      {
        id: 5,
        title: 'Cultural Dance Competition',
        date: 'Sep 21, 2026',
        time: '6:00 PM',
        description: 'Traditional and folk dance competition for children and youth with exciting prizes.',
        category: 'Cultural',
      },
      {
        id: 6,
        title: 'Ganesh Nimarjanam (Visarjan)',
        date: 'Sep 23, 2026',
        time: '4:00 PM',
        description: 'Grand procession through the village followed by immersion with full devotional fervor.',
        category: 'Festival Day',
      },
    ];
  }

  getGalleryImages(): GalleryImage[] {
    const g = 'assets/images/gallery/';
    // Curated, hand-ordered set so Ganesh imagery is spread naturally across the
    // grid rather than clustered together, while every category stays represented.
    const images: GalleryImage[] = [
      { id: 1, src: `${g}ganesh_2.avif`, alt: 'Lord Ganesha mandap darshan', category: 'Ganesh Idol' },
      { id: 2, src: `${g}ganesh_4.jpg`, alt: 'Mandap decoration setup', category: 'Mandap Decoration' },
      { id: 3, src: `${g}ganesh_5.jpg`, alt: 'Cultural program performance', category: 'Cultural Programs' },
      { id: 4, src: `${g}ganesh_11.avif`, alt: 'Modak naivedyam offering to Ganesha', category: 'Ganesh Idol' },
      { id: 5, src: `${g}ganesh_7.jpg`, alt: 'Youth association volunteers', category: 'Youth Association' },
      { id: 6, src: `${g}ganesh_8.jpg`, alt: 'Pooja celebration rituals', category: 'Pooja Celebrations' },
      { id: 7, src: `${g}ganesh_9.jpg`, alt: 'Lotus and divine blessings of Ganesha', category: 'Ganesh Idol' },
      { id: 8, src: `${g}ganesh_10.jpg`, alt: 'Community event gathering', category: 'Community Events' },
      { id: 9, src: `${g}ganesh_2.avif`, alt: 'Previous year celebration highlight', category: 'Previous Years' },
      { id: 10, src: `${g}ganesh_4.jpg`, alt: 'Golden crown of Lord Ganesha', category: 'Ganesh Idol' },
      { id: 11, src: `${g}ganesh_3.jpg`, alt: 'Ganesh idol at the mandap', category: 'Ganesh Idol' },
      { id: 12, src: `${g}ganesh_4.jpg`, alt: 'Festive mandap lighting', category: 'Mandap Decoration' },
      { id: 13, src: `${g}ganesh_5.jpg`, alt: 'Youth cultural dance performance', category: 'Cultural Programs' },
      { id: 14, src: `${g}ganesh_6.jpg`, alt: 'Association members at festival duty', category: 'Youth Association' },
      { id: 15, src: `${g}ganesh_7.jpg`, alt: 'Villagers at community feast', category: 'Community Events' },
      { id: 16, src: `${g}ganesh_8.jpg`, alt: 'Memories from past celebrations', category: 'Previous Years' },
    ];
    return images;
  }

  getUpdates(): FestivalUpdate[] {
    return [
      {
        id: 1,
        title: 'Festival Dates Confirmed',
        description:
          'Ganesh Chaturthi celebrations at Galli Ka Ganesh will officially begin on September 14 and conclude with Visarjan on September 23.',
        date: 'Sep 8, 2026',
        isImportant: true,
      },
      {
        id: 2,
        title: 'Volunteer Registrations Open',
        description:
          'Youth association members and villagers can register as festival volunteers at the association office.',
        date: 'Sep 9, 2026',
      },
      {
        id: 3,
        title: 'Mandap Decoration Begins',
        description: 'Decoration work for the main mandap has started under the supervision of senior members.',
        date: 'Sep 10, 2026',
      },
      {
        id: 4,
        title: 'Cultural Program Schedule Released',
        description: 'The full schedule for youth talent night and dance competitions has been finalized.',
        date: 'Sep 11, 2026',
      },
    ];
  }

  getMembers(): AssociationMember[] {
    return [
      {
        id: 1,
        name: 'Association President',
        role: 'Nallgoni Ajay',
        image: 'assets/images/association/member_1.jpg',
      },
      {
        id: 2,
        name: 'Association Vice President',
        role: 'Macharla Mahesh',
        image: 'assets/images/association/member_2.jpg',
      },
      {
        id: 3,
        name: 'General Secretary',
        role: 'Reddy Vivek',
        image: 'assets/images/association/member_3.jpg',
      },
      {
        id: 4,
        name: 'Cashier',
        role: 'Nallgoni Rajkumar',
        image: 'assets/images/association/member_7.jpeg',
      },
      {
        id: 5,
        name: 'Cultural Committee Lead',
        role: 'Dhobila Rakesh',
        image: 'assets/images/association/member_4.jpg',
      },
      {
        id: 6,
        name: 'Youth Coordinator',
        role: 'MD Irfan',
        image: 'assets/images/association/member_5.jpg',
      },
      {
        id: 7,
        name: 'Committee Member',
        role: 'Name',
        image: '',
      },
      {
        id: 8,
        name: 'Committee Member',
        role: 'Name',
        image: '',
      },
       {
        id: 9,
        name: 'Committee Member',
        role: 'Name',
        image: '',
      },
    ];
  }

  getAchievements(): Achievement[] {
    return [
      {
        id: 1,
        title: 'Best Village Mandap Recognition',
        year: '2024',
        description: 'Recognized among the top community-organized mandaps in Odela Mandal.',
      },
      {
        id: 2,
        title: 'Blood Donation Camp',
        year: '2023',
        description: 'Organized a village-wide blood donation camp with 80+ donors during the festival.',
      },
      {
        id: 3,
        title: 'Plastic-Free Festival Initiative',
        year: '2022',
        description: 'Led an eco-friendly Ganesh idol and plastic-free festival awareness drive.',
      },
    ];
  }
}
