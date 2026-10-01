import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { Player } from '../../data/club';

@Component({
  selector: 'rp-player-card',
  imports: [NgOptimizedImage],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
  host: { class: 'block' },
})
export class PlayerCard {
  readonly player = input.required<Player>();
}
