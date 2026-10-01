import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NextMatch } from './next-match';

describe('NextMatch', () => {
  let component: NextMatch;
  let fixture: ComponentFixture<NextMatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextMatch],
    }).compileComponents();

    fixture = TestBed.createComponent(NextMatch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
