import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Galli Ka Ganesh | Friends Youth Association',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | Galli Ka Ganesh',
  },
  {
    path: 'daily-pooja',
    loadComponent: () => import('./pages/pooja/pooja.component').then((m) => m.PoojaComponent),
    title: 'Daily Pooja Schedule | Galli Ka Ganesh',
  },
  {
    path: 'programs',
    loadComponent: () =>
      import('./pages/programs/programs.component').then((m) => m.ProgramsComponent),
    title: 'Programs & Events | Galli Ka Ganesh',
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
    title: 'Festival Gallery | Galli Ka Ganesh',
  },
  {
    path: 'updates',
    loadComponent: () => import('./pages/updates/updates.component').then((m) => m.UpdatesComponent),
    title: 'Festival Updates | Galli Ka Ganesh',
  },
  {
    path: 'location',
    loadComponent: () =>
      import('./pages/location/location.component').then((m) => m.LocationComponent),
    title: 'Location | Galli Ka Ganesh',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us | Galli Ka Ganesh',
  },
  { path: '**', redirectTo: '' },
];
