import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FESTIVAL_CONFIG } from '../../core/constants/app.constants';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'gkg-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionTitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly festival = FESTIVAL_CONFIG;
  readonly mapUrl: SafeResourceUrl;
  readonly form: ReturnType<FormBuilder['group']>;
  submitted = false;

  /** Last built message links, shown as manual fallback buttons after submit. */
  lastWhatsAppUrl = '';
  lastSmsUrl = '';

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    const query = encodeURIComponent(FESTIVAL_CONFIG.mapsQuery);
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${query}&output=embed`
    );

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{7,15}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  /**
   * Builds a plain-text enquiry message from the form and returns free,
   * key-less deep links that open the visitor's own WhatsApp / SMS app with
   * the message pre-filled to the association's number. No backend, no paid
   * messaging API (e.g. Twilio/WhatsApp Business API) is required — the
   * visitor's own device sends the message, exactly like a "mailto:" link.
   */
  private buildLinks(): { whatsapp: string; sms: string } {
    const name = this.form.value.name ?? '';
    const phone = this.form.value.phone ?? '';
    const message = this.form.value.message ?? '';

    const text =
      `New enquiry - Galli Ka Ganesh website%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Message: ${encodeURIComponent(message)}`;

    const whatsapp = `https://wa.me/${FESTIVAL_CONFIG.messagingNumberIntl}?text=${text}`;

    // iOS uses "&body=", most other platforms use "?body=" for the sms: URI scheme.
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const smsSeparator = isIOS ? '&' : '?';
    const sms = `sms:${FESTIVAL_CONFIG.messagingNumber}${smsSeparator}body=${text}`;

    return { whatsapp, sms };
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { whatsapp, sms } = this.buildLinks();
    this.lastWhatsAppUrl = whatsapp;
    this.lastSmsUrl = sms;

    // Automatically open WhatsApp with the message pre-filled — this is a genuine
    // user-gesture click (form submit), so it will not be blocked as a popup.
    window.open(whatsapp, '_blank', 'noopener');

    this.submitted = true;
    this.form.reset();
  }

  sendAnother(): void {
    this.submitted = false;
  }
}
