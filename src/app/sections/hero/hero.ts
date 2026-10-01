import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TICKER_WORDS } from '../../data/club';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'rp-hero',
  imports: [NgOptimizedImage, Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  host: { class: 'block' },
})
export class Hero {
  /** Se repite dos veces para que la cinta haga un bucle sin cortes. */
  protected readonly tickerWords = [...TICKER_WORDS, ...TICKER_WORDS];
}
