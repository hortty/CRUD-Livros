import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  pegarProduto() {
    return this.http.get<any>("http://localhost:3000/productList/");
  }

  colocarProduto(dados:any, id:number) {
    return this.http.put<any>("http://localhost:3000/productList/"+id, dados);
  }

  mandarProduto(dados: any) {
    return this.http.post<any>("http://localhost:3000/productList/", dados);
  }

  removeProduto(id: any) {
    return this.http.delete<any>("http://localhost:3000/productList/"+id)
  }
}
