import { Injectable } from '@angular/core';
import { MessagesService } from './messages.service';

@Injectable()
export class GameService {

  Me: User;

  constructor( private http: Http, private _Messages: MessagesService) { }

  login(name: string, password: string){
    if(password == '123'){}
  }

}
