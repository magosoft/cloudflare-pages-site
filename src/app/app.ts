import { Component } from '@angular/core';
import { SiteFooter } from './layout/site-footer/site-footer';
import { SiteHeader } from './layout/site-header/site-header';
import { Categories } from './sections/categories/categories';
import { Gallery } from './sections/gallery/gallery';
import { Hero } from './sections/hero/hero';
import { JoinCta } from './sections/join-cta/join-cta';
import { NextMatch } from './sections/next-match/next-match';
import { Story } from './sections/story/story';
import { Team } from './sections/team/team';

@Component({
  selector: 'rp-root',
  imports: [SiteHeader, Hero, Story, Team, Categories, NextMatch, Gallery, JoinCta, SiteFooter],
  template: `
    <rp-site-header />
    <main>
      <rp-hero />
      <rp-story />
      <rp-team />
      <rp-categories />
      <rp-next-match />
      <rp-gallery />
      <rp-join-cta />
    </main>
    <rp-site-footer />
  `,
})
export class App {}
