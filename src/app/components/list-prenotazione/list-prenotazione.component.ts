import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../../modelli/prenotazione';
import { Observable } from 'rxjs';
import { PrenotazioneService } from '../../servizi/prenotazione.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../servizi/login.service';

@Component({
  selector: 'app-list-prenotazione',
  templateUrl: './list-prenotazione.component.html',
  styleUrl: './list-prenotazione.component.css'
})
export class ListPrenotazioneComponent implements OnInit{

  handleSearchPrenotazione() {
    /* let keyword=this.searchFormGroup.value.keyword;
    this.prenotazioneService.searchPrenotazione(keyword).subscribe({
      next : prenotazioni =>{
        this.prenotazioni=prenotazioni;
      }
    }) */
  }

  errorMessage! : string;
  searchFormGroup! : FormGroup;

  handleDeletePrenotazione(p: Prenotazione) {
    let conf=confirm("Sicuro di voler cancellare?");
    if(conf==false) return;
    this.prenotazioneService.deletePrenotazione(p.id).subscribe({
      next : prenotazioni =>{
        let index=this.prenotazioni.indexOf(p);
        this.prenotazioni.splice(index, 1);
      }
    })
  }

  prenotazioni: Array<Prenotazione> = [];
  prenotazione$: Observable<Prenotazione[]> | undefined;

  constructor(private prenotazioneService: PrenotazioneService, private fb : FormBuilder, public logService: LoginService){}

  ngOnInit(){
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control(null)
    });

    this.handleGetAllPrenotazioni();
  }

  handleGetAllPrenotazioni(){
    this.prenotazione$ = this.prenotazioneService.getAllPrenotazioni();
    this.prenotazione$.subscribe({
      next : prenotazioni => {
        prenotazioni.forEach(
          prenotazione => this.prenotazioni.push(prenotazione)
        )
      },
      error : (err) => {
        this.errorMessage=err;
      }
    });
  }
}
