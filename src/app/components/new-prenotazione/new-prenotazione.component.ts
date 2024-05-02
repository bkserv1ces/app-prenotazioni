import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-prenotazione',
  templateUrl: './new-prenotazione.component.html',
  styleUrl: './new-prenotazione.component.css'
})
export class NewPrenotazioneComponent implements OnInit{

  public newPremotazioneForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.newPremotazioneForm = new FormGroup({
      cliente_nome: new FormControl(),
      cliente_email: new FormControl(),
      telefono:new FormControl(),
      numero_persone: new FormControl(),
      tipo_tavolo: new FormControl(),
      pagato: new FormControl(false)
    });
  }

  public saveData(){
    console.log(this.newPremotazioneForm);
    console.log('valeurs: ', JSON.stringify(this.newPremotazioneForm));
  }

}
