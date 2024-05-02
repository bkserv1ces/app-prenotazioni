export class Prenotazione {
    id: number;
    id_evento: number;
    cliente_nome: string;
    cliente_email: string;
    telefono: string;
    numero_persone: number;
    tipo_tavolo: string;
    pagato: boolean;
    codice_QR: string;

    constructor(
      id: number,
      id_evento: number,
      cliente_nome: string,
      cliente_email: string,
      telefono: string,
      numero_persone: number,
      tipo_tavolo: string,
      pagato: boolean,
      codice_QR: string,
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
      }
}
