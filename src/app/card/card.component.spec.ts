import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { DeckOfCardsService } from '../deck-of-cards.service';
import { Card } from '../models/card';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const cardSvcSpy = jasmine.createSpyObj('DeckOfCardsService', ['drawCard']);
  const card: Card = { value: '', suit: '', code: '', image: '' };
  cardSvcSpy.drawCard.and.returnValue(Promise.resolve(card));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [
        { provide: DeckOfCardsService, useValue: cardSvcSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
