import { Component } from '@angular/core';
import { OTHER_WORK, PROFILE, PROJECTS } from '../../data/profile';
import { ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  template: `
    <section class="section page-head">
      <div class="container">
        <p class="eyebrow">Projects</p>
        <h1>Things I've built</h1>
        <p class="lede">
          A live product I run end to end, and the Angular app I built in training. Each one
          links to the real thing.
        </p>
      </div>
    </section>

    <section class="container list">
      @for (p of projects; track p.slug) {
        <app-project-card [project]="p" [detailed]="true" />
      }
    </section>

    <section class="section">
      <div class="container">
        <h2>Also built</h2>
        <ul class="other">
          @for (w of other; track w.name) {
            <li>
              <h3>{{ w.name }}</h3>
              <p>{{ w.detail }}</p>
            </li>
          }
        </ul>
        <p class="more">
          More of my code is on
          <a [href]="profile.github" target="_blank" rel="noopener">GitHub</a>.
        </p>
      </div>
    </section>
  `,
  styles: `
    .page-head {
      padding-bottom: 32px;
    }
    .list {
      display: grid;
      gap: 32px;
    }
    .other {
      list-style: none;
      padding: 0;
      margin: 24px 0 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 20px;
    }
    .other li {
      padding: 22px;
      background: var(--peach-soft);
      border: 1px solid var(--line);
      border-radius: var(--radius);
    }
    .other h3 {
      font-size: 1.15rem;
      margin-bottom: 6px;
    }
    .other p {
      margin: 0;
      color: var(--ink-soft);
      font-size: 0.95rem;
    }
    .more {
      margin-top: 28px;
      color: var(--ink-soft);
    }
  `,
})
export class Projects {
  readonly projects = PROJECTS;
  readonly other = OTHER_WORK;
  readonly profile = PROFILE;
}
