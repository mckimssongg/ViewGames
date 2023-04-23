import { Component, HostBinding, OnInit } from '@angular/core';
import { IGame } from 'src/app/models/Game';
import { GamesService } from '../../services/games.service'
import { Router,  ActivatedRoute  } from '@angular/router';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  // Classes to add to the host element.
  @HostBinding('class') classes = 'row m-0 p-0';

  game: IGame = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
    created_at: new Date()
  }

  isEdit: boolean = false;

  constructor(private _gameService: GamesService,  private _route: Router,  private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const paramsd = this._activatedRoute.snapshot.params;
    if (paramsd['id']) {
      this._gameService.getGame(paramsd['id']).subscribe({
        next: (response) => {
          this.game = response;
          this.isEdit = true;
        },
        error: err => {
          console.log(err);
          Swal.fire('Error', 'Something went wrong', 'error').then(() => {
            this._route.navigate(['/games']);
          });
        },
        complete: () => {
          console.log('Completed');
        },
      });
    }
  }

  saveNewGame() {
    let newGameData = this.game;
    // validamos que todos los campos esten llenos
    if (
      newGameData.name === '' ||
      newGameData.description === '' ||
      newGameData.price === 0 ||
      newGameData.image === ''
    ) {
      console.log(newGameData);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields'
      })
      return
    }
    else {
      if (this.isEdit){
        // eliminamos el id y la fecha de creacion
        delete newGameData.created_at;
        this._gameService.updateGame(newGameData).subscribe({
          next: (response) => {
            console.log(response);
            Swal.fire('Success', 'Game updated successfully', 'success').then(() => {
              this._route.navigate(['/games']);
            });
            this.game = {
              id: 0,
              name: '',
              description: '',
              price: 0,
              image: '',
              created_at: new Date()
            }
          },
          error: err => {
            console.log(err);
            Swal.fire('Error', 'Something went wrong', 'error');
          
          },
          complete: () => {
            console.log('Completed');
          },
        });
      }
      else{
        // eliminamos el id y la fecha de creacion
        delete newGameData.id;
        delete newGameData.created_at;
        this._gameService.saveGame(newGameData).subscribe({
          next: (response) => {
            console.log(response);
            Swal.fire('Success', 'Game saved successfully', 'success').then(() => {
              this._route.navigate(['/games']);
            });
            this.game = {
              id: 0,
              name: '',
              description: '',
              price: 0,
              image: '',
              created_at: new Date()
            }
          },
          error: err => {
            console.log(err);
            Swal.fire('Error', 'Something went wrong', 'error');
          
          },
          complete: () => {
            console.log('Completed');
          },
        });
      }
    }
  }
}
