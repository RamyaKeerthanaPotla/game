import { Component, OnInit } from '@angular/core';
import { HTTP } from "@angular/http";
import { Game, User, Quote } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    Model = new Game();
    Me: User;  // Me = new User(); <-- this can alsso be written as Me: user;
    private _api = "http://localhost:8080/game";

  //constructor( private http: Http) { 
  //  this.Me.Name = "Ramya Keerthana Potla"}

  constructor(private http: Http){
    setInterval(() => this.refresh(), 1000)
  }

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api +"/state")
        .subscribe(data => this.Model = data.json() )
  }

  flipPicture(e: MouseEvent){
    this.http.post(this._api + "/picture",{})
        .subscribe();
  }

  submitQuote(e: MouseEvent, text: string, playerName: string){
        e.preventDefault();

        if(this.MyPlayedQuote()) return;

        this.http.post(this._api + "/quotes", { Text: text, PlayerId: this.Me.Name })
            .subscribe(data => {
              if(data.json().success){
                this.Me.MyQuotes.splice(this.Me.MyQuotes.indexOf(text), 1);
              }
         });

       //  this.Model.PlayedQuotes.push({ Text: text, PlayerName: this.Me.Name, Chosen: false});
        // this.Model.MyQuotes.splice(this.Model.MyQuotes.indexOf(text), 1);
      }

      MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerId == this.Me.Name );
      ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen );
      IsEveryoneDone = () => this.Model.PlayedQuotes.length == this.Model.Players.length - 1;
      IAmTheDealer = () => this.Me.Name == this.Model.DealerId;  
}