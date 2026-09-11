import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy } from '@angular/core';
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
export class HeaderComponent implements OnDestroy {
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

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.setMenuOpen(false));
  }

  ngOnDestroy(): void {
    // Make sure we never leave the scroll lock class behind if the
    // component is destroyed while the menu happens to be open.
    this.document.body.classList.remove('nav-open');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.setMenuOpen(false);
  }

  toggleMenu(): void {
    this.setMenuOpen(!this.isMenuOpen);
  }

  closeMenu(): void {
    this.setMenuOpen(false);
  }

  private setMenuOpen(open: boolean): void {
    this.isMenuOpen = open;
    // Prevent the page behind the drawer from scrolling (both vertically
    // and horizontally) while the mobile menu is open.
    this.document.body.classList.toggle('nav-open', open);
  }
}
