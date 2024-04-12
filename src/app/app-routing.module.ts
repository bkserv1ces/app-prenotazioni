import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPrenotazioneComponent } from './components/new-prenotazione/new-prenotazione.component';
import { ListPrenotazioneComponent } from './components/list-prenotazione/list-prenotazione.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';

const routes: Routes = [
  {path: 'banner', component: BannerComponent},
  {path: 'new-prenotazione', component: NewPrenotazioneComponent},
  {path: 'list-prenotazione', component: ListPrenotazioneComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/banner', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
