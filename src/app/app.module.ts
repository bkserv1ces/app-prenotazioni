import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NewPrenotazioneComponent } from './components/new-prenotazione/new-prenotazione.component';
import { ListPrenotazioneComponent } from './components/list-prenotazione/list-prenotazione.component';
import { BannerComponent } from './components/banner/banner.component';
import { DeletePrenotazioneComponent } from './components/delete-prenotazione/delete-prenotazione.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientiComponent } from './components/clienti/clienti.component';
import { TavoliComponent } from './components/tavoli/tavoli.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { UpdatePrenotazioneComponent } from './components/update-prenotazione/update-prenotazione.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    NewPrenotazioneComponent,
    ListPrenotazioneComponent,
    BannerComponent,
    DeletePrenotazioneComponent,
    ClientiComponent,
    TavoliComponent,
    AdminTemplateComponent,
    UpdatePrenotazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
