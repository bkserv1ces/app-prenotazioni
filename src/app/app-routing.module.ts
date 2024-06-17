import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPrenotazioneComponent } from './components/new-prenotazione/new-prenotazione.component';
import { ListPrenotazioneComponent } from './components/list-prenotazione/list-prenotazione.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { TavoliComponent } from './components/tavoli/tavoli.component';
import { ClientiComponent } from './components/clienti/clienti.component';
import { adminGuard, loginGuard, userGuard } from './guards/authentification.guard';
import { UpdatePrenotazioneComponent } from './components/update-prenotazione/update-prenotazione.component';

const routes: Routes = [
  {path: 'BukaroParty', component: BannerComponent},
  {path: 'new-prenotazione', component: NewPrenotazioneComponent},
  {path: 'update-prenotazione/:id', component: UpdatePrenotazioneComponent, canActivate: [adminGuard]},
  {path: 'list-prenotazione', component: ListPrenotazioneComponent, canActivate: [userGuard]},
  {path: 'login', component: LoginComponent, canActivate: [loginGuard]},
  {path: 'tavoli', component: TavoliComponent},
  {path: 'clienti', component: ClientiComponent, canActivate: [adminGuard]},
  {path: '', redirectTo:'/BukaroParty', pathMatch: 'full'},
  {path: '**', redirectTo: '/BukaroParty', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
