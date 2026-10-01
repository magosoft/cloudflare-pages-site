import { Component } from '@angular/core';
import { CATEGORIES } from '../../data/club';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'rp-categories',
  imports: [Reveal],
  templateUrl: './categories.html',
  host: { class: 'block' },
})
export class Categories {
  protected readonly categories = CATEGORIES;
}
