import { DOCUMENT } from '@angular/common';
import { inject, Service, signal } from '@angular/core';

/** Sigue qué sección está en el centro de la pantalla para marcar el menú activo. */
@Service()
export class ScrollSpy {
  private readonly document = inject(DOCUMENT);
  private readonly active = signal('inicio');
  readonly activeId = this.active.asReadonly();

  observe(ids: readonly string[]): () => void {
    if (typeof IntersectionObserver === 'undefined') {
      return () => {};
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.active.set(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of ids) {
      const section = this.document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }
}
