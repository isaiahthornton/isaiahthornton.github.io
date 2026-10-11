import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('creates the app shell', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the four primary nav links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('#primary-nav a'),
    ).map((a) => a.textContent?.trim());
    expect(links).toEqual(['Home', 'Projects', 'About', 'Contact']);
  });

  it('defines a title for every route', () => {
    expect(routes.every((r) => typeof r.title === 'string' && r.title.length > 0)).toBe(true);
  });
});
