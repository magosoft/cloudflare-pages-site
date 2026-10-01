import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { WHATSAPP_URL } from '../../data/club';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'rp-join-cta',
  imports: [NgOptimizedImage, Icon, Reveal],
  templateUrl: './join-cta.html',
  styleUrl: './join-cta.css',
  host: { class: 'block' },
})
export class JoinCta {
  protected readonly whatsappUrl = WHATSAPP_URL;
}
