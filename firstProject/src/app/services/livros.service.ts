import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../Livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  url = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  get(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.url);
  }

  getById(livroId: number): Observable<Livro> {
    const urlId = `${this.url}/${livroId}`;
    return this.http.get<Livro>(urlId);
  }

  create(livro: Livro): Observable<any> {
    return this.http.post<Livro>(this.url, livro);
  }

  update(livro: Livro): Observable<any> {
    return this.http.put<Livro>(this.url, livro);
  }

  remove(livroId: Number): Observable<any> {
    const urlId = `${this.url}/${livroId}`;
    return this.http.delete<number>(urlId);
  }
  
}
