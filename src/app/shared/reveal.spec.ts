import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Reveal } from './reveal';

@Component({
  imports: [Reveal],
  template: `<p [rpReveal]="120">Hola</p>`,
})
class Host {}

describe('Reveal', () => {
  it('should add the reveal class and delay', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    const p = (fixture.nativeElement as HTMLElement).querySelector('p')!;
    expect(p.classList).toContain('rp-reveal');
    expect(p.style.transitionDelay).toBe('120ms');
  });
});
