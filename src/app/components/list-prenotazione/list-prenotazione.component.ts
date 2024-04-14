import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../../modelli/prenotazione';
import { Observable } from 'rxjs';
import { PrenotazioneService } from '../../servizi/prenotazione.service';

@Component({
  selector: 'app-list-prenotazione',
  templateUrl: './list-prenotazione.component.html',
  styleUrl: './list-prenotazione.component.css'
})
export class ListPrenotazioneComponent implements OnInit{

  prenotazioni: Array<Prenotazione> = [];
  prenotazione$: Observable<Prenotazione[]> | undefined;

  constructor(private prenotazioneService: PrenotazioneService){}

  ngOnInit(){
    this.prenotazione$ = this.prenotazioneService.getAllPrenotazioni();
    this.prenotazione$.subscribe(prenotazioni => {prenotazioni.forEach(prenotazione => this.prenotazioni.push(prenotazione))});
  }
}
