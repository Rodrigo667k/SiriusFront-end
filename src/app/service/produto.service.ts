import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {



  constructor(

    private http:HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  getAllProduto():Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:8080/produtos',this.token)

  }
  getByIdProduto(id:number):Observable<Produto[]>{
    return this.http.get<Produto[]>(`http://localhost:8080/produtos/${id}`,this.token)

  }
  postTema(tema: Produto):Observable<Produto>{

    return this.http.post<Produto>('http://localhost:8080/produtos',tema,this.token)
  }

  putTema(tema:Produto):Observable<Produto>{

    return this.http.put<Produto>('http://localhost:8080/produtos',tema,this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`http://localhost:8080/produtos/${id}`,this.token)
  }  



  
}
