import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { FESTIVAL_CONFIG } from '../../core/constants/app.constants';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'gkg-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly festival = FESTIVAL_CONFIG;

  readonly navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Daily Pooja', path: '/daily-pooja' },
    { label: 'Programs', path: '/programs' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Updates', path: '/updates' },
    { label: 'Location', path: '/location' },
    { label: 'Contact', path: '/contact' },
  ];

  isScrolled = false;
  isMenuOpen = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => (this.isMenuOpen = false));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
