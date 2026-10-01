import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLAYERS } from '../../data/club';
import { PlayerCard } from './player-card';

describe('PlayerCard', () => {
  let fixture: ComponentFixture<PlayerCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerCard);
    fixture.componentRef.setInput('player', PLAYERS[0]);
    await fixture.whenStable();
  });

  it('should show number, name and position', () => {
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('10');
    expect(text).toContain('Gabriel Cáceres');
    expect(text).toContain('Delantero');
  });
});
