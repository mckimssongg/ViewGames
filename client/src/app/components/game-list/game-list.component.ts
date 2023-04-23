import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service'
import { IGame } from '../../models/Game';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  constructor(private gameService: GamesService,  private _route: Router) { }
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
  deleteGame(id: number) {
    if(
      id == null ||
      id == undefined ||
      id <= 0
    ) {
      return;
    }
    else{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.gameService.deleteGame(id.toString()).subscribe({
            next: (response) => {
              console.log(response);
              this.games = this.games.filter(game => game.id !== id);
            },
            error: err => console.error('Observer got an error: ' + err),
            complete: () => console.log('Observer got a complete notification'),
          });
        }
      })
    }
  }
  updateGame(id: number) {
    if(
      id == null ||
      id == undefined ||
      id <= 0
    ) {
      return;
    }
    else{
      this._route.navigate(['/games/edit', id]);
    }
  }
}

