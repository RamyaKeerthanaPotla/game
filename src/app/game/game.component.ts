import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    Model = new Game();
    Me = new User();

  constructor() { 
    this.Me.Name = "Ramya Keerthana"
  }

  ngOnInit() {
  }

      submitQuote(e: MouseEvent, text: string, playerName: string){
        e.preventDefault();

        if(this.MyPlayedQuote()) return;

        this.Model.PlayedQuotes.push({ Text: text, PlayerName: this.Me.Name, Chosen: false});
        this.Model.MyQuotes.splice(this.Model.MyQuotes.indexOf(text), 1);
      }

      MyPlayedQuote(): Quote | null {
        return this.Model.PlayedQuotes.find( x => x.PlayerNmae == this.Me.Name );
      }
}