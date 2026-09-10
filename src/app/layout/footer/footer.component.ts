import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FESTIVAL_CONFIG } from '../../core/constants/app.constants';

@Component({
  selector: 'gkg-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly festival = FESTIVAL_CONFIG;
  readonly year = new Date().getFullYear();
}
