import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { Prenotazione } from '../../modelli/prenotazione';
import { PrenotazioneService } from '../../servizi/prenotazione.service';
import { UUID } from 'angular2-uuid';
import { BannerComponent } from '../banner/banner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-prenotazione',
  templateUrl: './new-prenotazione.component.html',
  styleUrl: './new-prenotazione.component.css'
})
export class NewPrenotazioneComponent implements OnInit{

  public newPrenotazioneForm!: FormGroup;
  private codice_QR!: string;
  private id!: string;
  submitted: boolean = false;
  prenotazioni: Array<Prenotazione> = [];
  public prenotazione: Prenotazione = new Prenotazione("",0,'','','',0,'',false,'', 0);

  constructor(private fb: FormBuilder, private prenotazioneService: PrenotazioneService, private router : Router){}

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
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const milliseconds = ('00' + date.getMilliseconds()).slice(-3);
  
    const id = year + month + day + hours + minutes + seconds + milliseconds;
    this.id = id;
  }

  public onSubmit(){
    this.submitted = true;
    const newPrenotazione = new Prenotazione(
      this.newPrenotazioneForm.value.id,
      0,
      this.newPrenotazioneForm.value.cliente_nome,
      this.newPrenotazioneForm.value.cliente_email,
      this.newPrenotazioneForm.value.telefono,
      this.newPrenotazioneForm.value.numero_persone,
      this.newPrenotazioneForm.value.tipo_tavolo,
      this.newPrenotazioneForm.value.pagato,
      this.newPrenotazioneForm.value.codice_QR,
      0
    );
    this.prenotazioneService.addPrenotazione(newPrenotazione).subscribe({
      next : prenotazione => {
        this.prenotazioni.push(prenotazione);
        alert("Prenotazione effettuata con successo!");
        this.router.navigateByUrl("/list-prenotazione");
      },
      error : err => {
        console.log(err);
      }
    })
  }
}
