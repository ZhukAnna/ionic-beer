import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { BeerPage } from './beer.page';

describe('TabsPage', () => {
  let component: BeerPage;
  let fixture: ComponentFixture<BeerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerPage, IonicModule],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
