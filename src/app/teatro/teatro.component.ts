import { Component, OnInit } from '@angular/core';
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
export class TeatroComponent implements OnInit {
  posti: Array<postiTeatro>;

  constructor(private service: TeatroService) { }

  ngOnInit() {
  }

}