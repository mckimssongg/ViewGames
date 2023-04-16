import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameListComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  HttpClientModule, CommonModule, NgOptimizedImage],
  exports: [RouterModule, HttpClientModule, CommonModule, NgOptimizedImage]
})
export class AppRoutingModule { }
