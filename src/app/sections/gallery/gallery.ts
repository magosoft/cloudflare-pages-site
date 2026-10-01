import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, viewChild } from '@angular/core';
import { GALLERY } from '../../data/club';
import { Reveal } from '../../shared/reveal';

const TRACK_GAP = 18;

@Component({
  selector: 'rp-gallery',
  imports: [NgOptimizedImage, Reveal],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  host: { class: 'block' },
})
export class Gallery {
  protected readonly photos = GALLERY;
  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');

  protected scroll(direction: -1 | 1): void {
    const track = this.track().nativeElement;
    const item = track.querySelector('figure');
    const step = item ? item.getBoundingClientRect().width + TRACK_GAP : 320;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  }
}
