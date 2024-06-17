import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../../modelli/prenotazione';
import { Observable } from 'rxjs';
import { PrenotazioneService } from '../../servizi/prenotazione.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../servizi/login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-prenotazione',
  templateUrl: './list-prenotazione.component.html',
  styleUrl: './list-prenotazione.component.css'
})
export class ListPrenotazioneComponent implements OnInit{

  keyword: string = '';
  prenotazioni: Array<Prenotazione> = [];
  prenotazione$: Observable<Prenotazione[]> | undefined;
  errorMessage! : string;
  searchFormGroup! : FormGroup;

  constructor(private prenotazioneService: PrenotazioneService, private fb : FormBuilder, public logService: LoginService, private route: Router){}


handleUpdatePrenotazione(p: Prenotazione) {
  this.route.navigateByUrl("/update-prenotazione/" + p.id);
}

  onSearch(): void {

  }

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
