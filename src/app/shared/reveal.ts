import { afterNextRender, DestroyRef, Directive, ElementRef, inject, input, signal } from '@angular/core';

/**
 * Aparición al entrar en pantalla. El valor opcional es el retraso en ms:
 * `<p rpReveal>` o `<li [rpReveal]="i * 80">`.
 */
@Directive({
  selector: '[rpReveal]',
  host: {
    class: 'rp-reveal',
    '[class.rp-in]': 'visible()',
    '[style.transition-delay.ms]': 'delay()',
  },
})
export class Reveal {
  readonly delay = input(0, { alias: 'rpReveal', transform: (value: unknown) => Number(value) || 0 });
  protected readonly visible = signal(false);

  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        this.visible.set(true);
        return;
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            this.visible.set(true);
            observer.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
