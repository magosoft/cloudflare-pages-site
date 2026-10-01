import { Component } from '@angular/core';
import { PLAYERS } from '../../data/club';
import { Reveal } from '../../shared/reveal';
import { PlayerCard } from '../player-card/player-card';

@Component({
  selector: 'rp-team',
  imports: [PlayerCard, Reveal],
  templateUrl: './team.html',
  styleUrl: './team.css',
  host: { class: 'block' },
})
export class Team {
  protected readonly players = PLAYERS;
}
