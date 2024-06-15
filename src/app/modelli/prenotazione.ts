import { UUID } from "angular2-uuid";

export class Prenotazione {
    public id: string;
    public id_evento: number;
    public cliente_nome: string;
    public cliente_email: string;
    public telefono: string;
    public numero_persone: number;
    public tipo_tavolo: string;
    public pagato: boolean;
    public codice_QR: string;
    public deleted: boolean;

     constructor(
      id: string,
      id_evento: number,
      cliente_nome: string,
      cliente_email: string,
      telefono: string,
      numero_persone: number,
      tipo_tavolo: string,
      pagato: boolean,
      codice_QR: string,
      deleted: boolean,
      ) {
        this.id = id;
        this.id_evento = id_evento;
        this.cliente_nome = cliente_nome;
        this.cliente_email = cliente_email;
        this.telefono = telefono;
        this.numero_persone = numero_persone;
        this.tipo_tavolo = tipo_tavolo;
        this.pagato = pagato;
        this.codice_QR = codice_QR;
        this.deleted = deleted;
      } 
}

export interface PagePrenotazione {
  prenotazioni : Prenotazione[];
  page : number;
  size : number;
  totalPages : number;
}
