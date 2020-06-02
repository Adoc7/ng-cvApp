import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne [];

  link = 'http://localhost:3000/api/n';
  
  constructor(
    private http: HttpClient
  ) { 
    this.personnes = [
      {
        id: 1,
        name: 'Khod',
        firstname: 'Jean',
        age: 45,
        path: 'man_1.png',
        cin: 1111,
        job: 'Codeur'
      },
      {
        id: 2,
        name: 'StimDream',
        firstname: 'Victoria',
        age: 36,
        path: 'woman_0.jpg',
        cin: 66666,
        job: 'Webdesigner'
      },
      {
        id: 3,
        name: 'Singer',
        firstname: 'Bob',
        age: 42,
        path: 'man_2.png',
        cin: 11111,
        job: 'Musician'
      },
      ];  
  }
  getPersonnes () : Observable<Personne []> {
    return this.http.get<Personne []>(this.link);
  }
  getFakePersonnes () {
    return this.personnes;
  }
  getPersonneById (id: number): Observable<Personne> {
    return this.http.get<Personne>(this.link + `/${id}` );
  }
  addPersonne(personne: Personne): Observable<any> {
  /*   const token = localStorage.getItem('token');
    if (token) {
      const params = new HttpParams().set('access_token', token);
      return this.http.post(this.link, personne, {params});
    } */
    return this.http.post(this.link, personne);
  }
  deletePersonne(id: number) {
    return this.http.delete(this.link + `/${id}` );
  }
  updatePersonne(personne: Personne){
    return this.http.put(this.link, personne);
  }
  findByName(name): Observable<Personne []> {
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.http.get<Personne []>(this.link, {params});
  }
}