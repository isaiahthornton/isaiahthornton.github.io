import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer>
      <div class="container footer-inner">
        <div>
          <p class="name">{{ profile.name }}</p>
          <p class="meta">
            © {{ year }} · Built with Angular ·
            <a [href]="profile.repo" target="_blank" rel="noopener">View source</a>
          </p>
        </div>
        <ul class="social">
          <li><a [href]="profile.github" target="_blank" rel="noopener">GitHub</a></li>
          <li><a [href]="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a routerLink="/contact">Email</a></li>
        </ul>
      </div>
    </footer>
  `,
  styles: `
    footer {
      border-top: 1px solid var(--line);
      background: var(--cream-deep);
      padding: 32px 0;
    }
    .footer-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
    p {
      margin: 0;
    }
    .name {
      font-family: var(--font-display);
      font-size: 1.1rem;
    }
    .meta {
      font-size: 0.9rem;
      color: var(--ink-soft);
    }
    .social {
      display: flex;
      gap: 20px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .social a {
      color: var(--ink);
      font-weight: 500;
      text-decoration: none;
    }
    .social a:hover {
      color: var(--terracotta);
    }
  `,
})
export class Footer {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();
}
