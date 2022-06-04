import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TeatroService } from './teatro.service';

export class postiTeatro {
  palco: [];
  platea: [];
}

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css']
})
export class TeatroComponent {
  @Output() newTeatroEvent = new EventEmitter<string>();
  posti: Array<postiTeatro>;
  key: string;

  constructor(private service: TeatroService) { }

  creaTeatro(){
    this.service.newPrenotazione().subscribe(
      {
        next: (x: any) => {
          const key = x;
          const platea = new Array(7).fill("").map(() => new Array(10).fill("x"));
          const palco = new Array(4).fill("").map(() => new Array(6).fill("x"));
          const prenotazione = platea.concat(palco);
          this.service.setPrenotazione(key, prenotazione).subscribe(
            {
              next: (x: any) => {
                this.newTeatroEvent.emit(key);
              },
              error: err => console.error(`Observer got an error: ${JSON.stringify(err)}`)
            }
          )
        },
        error: err => console.error(`Observer got an error: ${JSON.stringify(err)}`)
      }
    )
  }
}