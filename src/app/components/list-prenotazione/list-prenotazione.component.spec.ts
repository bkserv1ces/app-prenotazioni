import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrenotazioneComponent } from './list-prenotazione.component';

describe('ListPrenotazioneComponent', () => {
  let component: ListPrenotazioneComponent;
  let fixture: ComponentFixture<ListPrenotazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPrenotazioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
