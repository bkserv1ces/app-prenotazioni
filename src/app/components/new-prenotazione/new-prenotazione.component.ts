import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { Prenotazione } from '../../modelli/prenotazione';

@Component({
  selector: 'app-new-prenotazione',
  templateUrl: './new-prenotazione.component.html',
  styleUrl: './new-prenotazione.component.css'
})
export class NewPrenotazioneComponent implements OnInit{

  public newPrenotazioneForm!: FormGroup;
  private codice_QR!: string;
  private id!: number;
  public prenotazione: Prenotazione = new Prenotazione(0,0,'','','',0,'',false,'');

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.generateRandomCodice();
    this.generateRandomId();
    this.newPrenotazioneForm = this.fb.group({
      id: [this.id, Validators.required],
      cliente_nome: ['', [Validators.required, Validators.minLength(4)]],
      cliente_email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.minLength(10), Validators.maxLength(10)]],
      numero_persone: [null, [Validators.required, Validators.pattern(/^(0*[1-9]|1[0-9]|20)$/)]],
      tipo_tavolo: ['', Validators.required],
      pagato: false,
      codice_QR: [this.codice_QR, Validators.required]
    });
  }

  private generateRandomCodice(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.codice_QR = result;
  }

  generateRandomId() {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-4);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const randomDigits = Math.floor(1000 + Math.random() * 9000); 
    const id = parseInt(year + month + day + randomDigits.toString(), 10);
    this.id = id;
  }

  public saveData(){
    console.log(this.newPrenotazioneForm);
    console.log('valeurs: ', JSON.stringify(this.newPrenotazioneForm.value));
    console.log('hello bk');
  }

}
