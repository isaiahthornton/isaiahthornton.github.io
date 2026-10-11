import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="container nf">
        <p class="eyebrow">404</p>
        <h1>This page doesn't exist</h1>
        <p class="lede">The link may be old or mistyped. Here's the way back.</p>
        <a class="btn btn-primary" routerLink="/">Go to the home page</a>
      </div>
    </section>
  `,
  styles: `
    .nf {
      min-height: 50vh;
    }
    .lede {
      margin-bottom: 28px;
    }
  `,
})
export class NotFound {}
