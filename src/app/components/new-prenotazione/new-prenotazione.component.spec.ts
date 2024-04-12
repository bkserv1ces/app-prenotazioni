import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPrenotazioneComponent } from './new-prenotazione.component';

describe('NewPrenotazioneComponent', () => {
  let component: NewPrenotazioneComponent;
  let fixture: ComponentFixture<NewPrenotazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewPrenotazioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
