import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, throwError } from 'rxjs';
import { PagePrenotazione, Prenotazione } from '../modelli/prenotazione';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllPrenotazioni(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(`${this.URL}/prenotazioni`).pipe(
      map(prenotazioni => prenotazioni
        .filter(p => p.deleted === 0)
        .sort((a, b) => parseInt(b.id, 10) - parseInt(a.id, 10))
      )
    );
  }
  
  getPrenotazioneById(id: string): Observable<Prenotazione>{
    return this.http.get<Prenotazione>(`${this.URL}/prenotazioni/${id}`);
  }

  addPrenotazione(prenotazione: Prenotazione){
    return this.http.post<Prenotazione>(`${this.URL}/prenotazioni`, prenotazione);
  }

  deletePrenotazione(id: string): Observable<Prenotazione> {
    return this.http.patch<Prenotazione>(`${this.URL}/prenotazioni/${id}`, { deleted: 1 });
  }

  updatePrenotazione(prenotazione: Prenotazione): Observable<Prenotazione>{
    return this.http.put<Prenotazione>(`${this.URL}/prenotazioni/${prenotazione.id}`, prenotazione);
  }
}
