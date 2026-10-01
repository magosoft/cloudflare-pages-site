import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CLUB_VALUES } from '../../data/club';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'rp-story',
  imports: [NgOptimizedImage, Icon, Reveal],
  templateUrl: './story.html',
  styleUrl: './story.css',
  host: { class: 'block' },
})
export class Story {
  protected readonly values = CLUB_VALUES;
}
