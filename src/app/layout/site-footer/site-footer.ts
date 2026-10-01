import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { WHATSAPP_URL } from '../../data/club';
import { Icon, IconName } from '../../shared/icon/icon';

interface SocialLink {
  label: string;
  icon: IconName;
  href: string;
}

@Component({
  selector: 'rp-site-footer',
  imports: [NgOptimizedImage, Icon],
  templateUrl: './site-footer.html',
  host: { class: 'block' },
})
export class SiteFooter {
  protected readonly socials: readonly SocialLink[] = [
    { label: 'Facebook', icon: 'facebook', href: '#' },
    { label: 'Instagram', icon: 'instagram', href: '#' },
    { label: 'YouTube', icon: 'youtube', href: '#' },
    { label: 'WhatsApp', icon: 'whatsapp', href: WHATSAPP_URL },
  ];
}
