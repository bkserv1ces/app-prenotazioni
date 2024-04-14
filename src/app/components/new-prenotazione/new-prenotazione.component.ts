import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../../modelli/prenotazione';
import { PrenotazioneService } from '../../servizi/prenotazione.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-prenotazione',
  templateUrl: './new-prenotazione.component.html',
  styleUrl: './new-prenotazione.component.css'
})
export class NewPrenotazioneComponent implements OnInit{

  constructor(private prenotazioneService: PrenotazioneService){
    this.submitted = false;
    //this.model = new Prenotazione(0,0,'','','',0,'',false,'');
    this.model = new Prenotazione('nome', 'email');
  }

  first_category_name = 'Diamante';
  second_category_name = 'Oro';
  third_category_name = 'Standard';

  first_category_price = '€1000';
  second_category_price = '€500';
  third_category_price = '€300';

  public model: Prenotazione;

  prenotazioni: Array<Prenotazione> = [];
  submitted: boolean = false;

  prenotazioneForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    /*telefono: new FormControl('', Validators.required),
    numeroDiPersone: new FormControl(0, Validators.required),
    tipo_tavolo: new FormControl('', Validators.required),
    codice: new FormControl('', Validators.required), */
  });

  onSubmit(){
    this.submitted = true;

    const nome = this.prenotazioneForm.value.nome!;
    const email = this.prenotazioneForm.value.email!;
    /*const telefono = this.prenotazioneForm.value.telefono!;
    const numeroDiPersone = this.prenotazioneForm.value.numeroDiPersone!;
    const tipo_tavolo = this.prenotazioneForm.value.tipo_tavolo!;
    const codice = this.prenotazioneForm.value.codice!; */
  
/*     const newPrenotazione = new Prenotazione(
      0,
      0,
      nome, 
      email, 
      telefono, 
      numeroDiPersone, 
      tipo_tavolo, 
      true, 
      codice,
    ); */

    const newPrenotazione = new Prenotazione(
      nome,
      email
    ); 

    this.prenotazioneService.addPrenotazione(newPrenotazione).subscribe(prenotazione => this.prenotazioni.push(prenotazione));
    this.prenotazioneForm.reset();
  }

  ngOnInit(): void {}
}
