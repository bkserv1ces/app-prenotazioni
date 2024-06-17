import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrenotazioneComponent } from './update-prenotazione.component';

describe('UpdatePrenotazioneComponent', () => {
  let component: UpdatePrenotazioneComponent;
  let fixture: ComponentFixture<UpdatePrenotazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePrenotazioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
