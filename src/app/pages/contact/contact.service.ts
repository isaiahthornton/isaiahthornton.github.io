import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PROFILE } from '../../data/profile';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * GitHub Pages only serves static files, so messages go through Formspree
 * (https://formspree.io). Paste your form endpoint here, e.g.
 * 'https://formspree.io/f/abcdwxyz'. While it is empty, the form falls back
 * to opening a pre-filled email in the visitor's mail app.
 */
export const FORM_ENDPOINT = '';

export type SendResult = 'sent' | 'mailto';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(msg: ContactMessage, endpoint = FORM_ENDPOINT): Observable<SendResult> {
    if (!endpoint) {
      window.location.href = this.mailtoLink(msg);
      return of('mailto');
    }
    return this.http
      .post(endpoint, { ...msg, _subject: msg.subject || `Portfolio message from ${msg.name}` }, {
        headers: { Accept: 'application/json' },
      })
      .pipe(map(() => 'sent' as const));
  }

  mailtoLink(msg: ContactMessage): string {
    const subject = msg.subject || `Portfolio message from ${msg.name}`;
    const body = `${msg.message}\n\n${msg.name}\n${msg.email}`;
    return `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
