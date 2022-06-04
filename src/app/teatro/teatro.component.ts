import { Component, OnInit } from '@angular/core';
import { TeatroService } from './teatro.service';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css']
})
export class TeatroComponent implements OnInit {
  palco: [];
  platea: [];

  constructor(private service: TeatroService) { }

  ngOnInit() {
  }

}