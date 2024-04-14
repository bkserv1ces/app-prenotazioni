import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePrenotazioneComponent } from './delete-prenotazione.component';

describe('DeletePrenotazioneComponent', () => {
  let component: DeletePrenotazioneComponent;
  let fixture: ComponentFixture<DeletePrenotazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePrenotazioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletePrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
