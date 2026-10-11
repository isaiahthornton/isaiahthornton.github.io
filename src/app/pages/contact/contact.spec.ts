import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Contact } from './contact';
import { ContactService } from './contact.service';

const valid = {
  name: 'Jordan Lee',
  email: 'jordan@company.com',
  subject: '',
  message: 'Hi Isaiah, I would like to talk about a junior role.',
};

describe('Contact page', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('does not send when the form is invalid and shows errors', () => {
    const fixture = TestBed.createComponent(Contact);
    const service = TestBed.inject(ContactService);
    const send = vi.spyOn(service, 'send');

    fixture.componentInstance.onSubmit();
    fixture.detectChanges();

    expect(send).not.toHaveBeenCalled();
    expect(fixture.componentInstance.showError('name')).toBe(true);
    expect(fixture.componentInstance.showError('email')).toBe(true);
    expect(fixture.componentInstance.showError('message')).toBe(true);
  });

  it('rejects a bad email and a too-short message', () => {
    const c = TestBed.createComponent(Contact).componentInstance;
    c.form.setValue({ ...valid, email: 'not-an-email', message: 'too short' });
    expect(c.form.controls.email.invalid).toBe(true);
    expect(c.form.controls.message.invalid).toBe(true);
  });

  it('sends a valid message and resets the form', () => {
    const fixture = TestBed.createComponent(Contact);
    const c = fixture.componentInstance;
    vi.spyOn(TestBed.inject(ContactService), 'send').mockReturnValue(of('sent'));

    c.form.setValue(valid);
    c.onSubmit();

    expect(c.status()).toBe('sent');
    expect(c.form.controls.name.value).toBe('');
  });
});

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
  });

  it('builds an encoded mailto link with a default subject', () => {
    const link = TestBed.inject(ContactService).mailtoLink(valid);
    expect(link.startsWith('mailto:isaiah.g.thornton31@gmail.com?subject=')).toBe(true);
    expect(link).toContain(encodeURIComponent('Portfolio message from Jordan Lee'));
  });

  it('posts JSON to the form endpoint when one is configured', () => {
    const http = TestBed.inject(HttpTestingController);
    let result: string | undefined;
    TestBed.inject(ContactService)
      .send(valid, 'https://formspree.io/f/test')
      .subscribe((r) => (result = r));

    const req = http.expectOne('https://formspree.io/f/test');
    expect(req.request.method).toBe('POST');
    expect(req.request.body.email).toBe(valid.email);
    req.flush({ ok: true });
    expect(result).toBe('sent');
    http.verify();
  });
});
