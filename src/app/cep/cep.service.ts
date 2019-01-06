import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from './cepClass';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  buscar(cep:string) {
    return new Promise((resolve, reject) => {
      this._http.get(`https://viacep.com.br/ws/${cep}/json/`) //Requisicao HTTP

        .subscribe((result:any) => {
          resolve(this.recuperarDados(result)) //Recuperacao de dados com JSON (entregue desta forma via API)
        },(error) => {
            reject(error)
          }
        )
    })
  }

  recuperarDados(cepResult:Cep) {
    let cepAux = new Cep()

    cepAux.cep = cepResult.cep
    cepAux.logradouro = cepResult.logradouro
    cepAux.complemento = cepResult.complemento
    cepAux.bairro = cepResult.bairro
    cepAux.localidade = cepResult.localidade
    cepAux.uf = cepResult.uf

    return cepAux;
  }

  constructor(private _http:HttpClient) { }
}
