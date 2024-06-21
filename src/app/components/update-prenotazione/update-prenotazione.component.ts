import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrenotazioneService } from '../../servizi/prenotazione.service';
import { Prenotazione } from '../../modelli/prenotazione';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-prenotazione',
  templateUrl: '../new-prenotazione/new-prenotazione.component.html',
  styleUrl: './update-prenotazione.component.css'
})
export class UpdatePrenotazioneComponent implements OnInit{

  prenotazioneId! : string;
  prenotazione! : Prenotazione;
  prenotazioni: Array<Prenotazione> = [];
  newPrenotazioneForm! : FormGroup;
  submitted: boolean = false;

  constructor(private route : ActivatedRoute, private router : Router, private prenotazioneService : PrenotazioneService, private fb : FormBuilder)
  {
    this.prenotazioneId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
      this.prenotazioneService.getPrenotazioneById(this.prenotazioneId).subscribe({
        next :(prenotazione)=>{
          this.prenotazione=prenotazione;
          this.newPrenotazioneForm = this.fb.group({
            id: [this.prenotazione.id, Validators.required],
            cliente_nome: [this.prenotazione.cliente_nome, [Validators.required, Validators.minLength(4)]],
            cliente_email: [this.prenotazione.cliente_email, [Validators.required, Validators.email]],
            telefono: [this.prenotazione.telefono, [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.minLength(10), Validators.maxLength(10)]],
            numero_persone: [this.prenotazione.numero_persone, [Validators.required, Validators.pattern(/^(0*[1-9]|1[0-9]|20)$/)]],
            tipo_tavolo: [this.prenotazione.tipo_tavolo, Validators.required],
            pagato: this.prenotazione.pagato,
            codice_QR: [this.prenotazione.codice_QR, Validators.required]
          });
        },
        error : (err) =>{
          console.log(err);
        }
      });
  }

  public onSubmit(){
    this.submitted = true;
    const updatePrenotazione = new Prenotazione(
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
    this.prenotazioneService.updatePrenotazione(updatePrenotazione).subscribe({
      next : prenotazione => {
        this.prenotazioni.push(prenotazione);
        alert("Prenotazione modificata con successo!");
        this.router.navigateByUrl("/list-prenotazione");
      },
      error : err => {
        console.log(err);
      }
    })
  }
}
