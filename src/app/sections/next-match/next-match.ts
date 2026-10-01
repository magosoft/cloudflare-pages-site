import { NgOptimizedImage } from '@angular/common';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { NEXT_MATCH } from '../../data/club';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal';

const pad = (n: number) => String(n).padStart(2, '0');

@Component({
  selector: 'rp-next-match',
  imports: [NgOptimizedImage, Icon, Reveal],
  templateUrl: './next-match.html',
  styleUrl: './next-match.css',
  host: { class: 'block' },
})
export class NextMatch {
  protected readonly match = NEXT_MATCH;
  private readonly kickoff = new Date(NEXT_MATCH.kickoff).getTime();
  private readonly now = signal(Date.now());

  private readonly secondsLeft = computed(() => Math.max(0, Math.floor((this.kickoff - this.now()) / 1000)));

  protected readonly countdown = computed(() => {
    const s = this.secondsLeft();
    return [
      { label: 'días', value: pad(Math.floor(s / 86400)) },
      { label: 'hrs', value: pad(Math.floor((s % 86400) / 3600)) },
      { label: 'min', value: pad(Math.floor((s % 3600) / 60)) },
      { label: 'seg', value: pad(s % 60) },
    ];
  });

  protected readonly countdownLabel = computed(() => {
    const [days, hours] = this.countdown();
    return `Faltan ${Number(days.value)} días y ${Number(hours.value)} horas para el partido`;
  });

  constructor() {
    const timer = setInterval(() => {
      this.now.set(Date.now());
      if (this.secondsLeft() === 0) clearInterval(timer);
    }, 1000);
    inject(DestroyRef).onDestroy(() => clearInterval(timer));
  }
}
