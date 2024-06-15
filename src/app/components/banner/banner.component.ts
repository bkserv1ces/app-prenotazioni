import { Component } from '@angular/core';
import { LoginService } from '../../servizi/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  dj = "Armel"
  data = "Sabato 23 Marzo"
  ora = "Dalle 23:00 alle 5:00"
  indirizzo = "Via amerigo vespucci 77, Rimini"
  telefono = "3715847160 - 3349751383"

  constructor(public logService : LoginService, private router : Router){}
}
