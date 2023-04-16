import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service'
import { IGame } from '../../models/Game';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  constructor(private gameService: GamesService) { }
  games: IGame[] = [];
  ngOnInit() {
    this.gameService.getGames().subscribe({
      next: (games: IGame[]) => {
        this.games = games;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }    
  
}

