import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { NAV_LINKS, WHATSAPP_URL } from '../../data/club';
import { Icon } from '../../shared/icon/icon';
import { ScrollSpy } from '../../shared/scroll-spy';

@Component({
  selector: 'rp-site-header',
  imports: [NgOptimizedImage, Icon],
  templateUrl: './site-header.html',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class SiteHeader {
  private readonly document = inject(DOCUMENT);
  private readonly scrollSpy = inject(ScrollSpy);

  protected readonly links = NAV_LINKS;
  protected readonly whatsappUrl = WHATSAPP_URL;
  protected readonly activeId = this.scrollSpy.activeId;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly showFloatingWhatsapp = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      this.onScroll();
      destroyRef.onDestroy(this.scrollSpy.observe(NAV_LINKS.map((link) => link.id)));
    });
  }

  protected onScroll(): void {
    const view = this.document.defaultView;
    if (!view) return;
    this.scrolled.set(view.scrollY > 20);
    this.showFloatingWhatsapp.set(view.scrollY > view.innerHeight * 0.6);
  }

  protected toggleMenu(): void {
    this.setMenu(!this.menuOpen());
  }

  protected closeMenu(): void {
    this.setMenu(false);
  }

  private setMenu(open: boolean): void {
    this.menuOpen.set(open);
    this.document.body.style.overflow = open ? 'hidden' : '';
  }
}
