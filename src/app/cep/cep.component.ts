import { Component, OnInit } from '@angular/core';
import { CepService } from './cep.service';
import { Cep } from './cepClass';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  cep = new Cep()

  constructor(private _cepService:CepService) {}

  ngOnInit() {
  }

  buscar() {
    this._cepService.buscar(this.cep.cep)
    .then((cepTransference:Cep) => this.cep = cepTransference)
    .catch(() => {alert('Não foi possível encontrar o CEP digitado.')})
  }

}
