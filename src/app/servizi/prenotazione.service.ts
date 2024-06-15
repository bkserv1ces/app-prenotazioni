import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PagePrenotazione, Prenotazione } from '../modelli/prenotazione';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllPrenotazioni(): Observable<Prenotazione[]>{
    return this.http.get<Prenotazione[]>(`${this.URL}/prenotazioni`);
  }

  addPrenotazione(prenotazione: Prenotazione){
    return this.http.post<Prenotazione>(`${this.URL}/prenotazioni`, prenotazione);
  }

  deletePrenotazione(id: string): Observable<{}>{
    return this.http.delete<Prenotazione>(`${this.URL}/prenotazioni/${id}`);
  }

/*   searchPrenotazione(keyword : string): Observable<Prenotazione[]>{
    return this.http.get<Prenotazione[]>(`${this.URL}/prenotazioni/`);
  } */

/*   updatePrenotazione(prenotazione: Prenotazione): Observable<Prenotazione>{
    return this.http.put<Prenotazione>(`${this.URL}/prenotazioni/${prenotazione.id}`, prenotazione);
  } */
}
