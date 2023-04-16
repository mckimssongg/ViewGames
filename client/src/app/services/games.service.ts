import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGame } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {}

  getGames(): Observable<IGame[]>{
    return this.http.get(`${this.API_URI}/games`) as Observable<IGame[]>;
  }

  getGame(id: string){
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  saveGame(game: IGame){
    return this.http.post(`${this.API_URI}/games`, game);
  }

  deleteGame(id: string){
    return this.http.delete(`${this.API_URI}/games/${id}`);
  } 

  updateGame(game: IGame): Observable<IGame> {
    return this.http.put(`${this.API_URI}/games/${game.id}`, game);
  }
    
}
