import { Component } from '@angular/core';

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
}
