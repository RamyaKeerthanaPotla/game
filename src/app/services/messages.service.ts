import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService { 
    
  Messages: string { Text: string, Type: 'success' | 'danger' } [] ;

  constructor() {
    this.Messages = [
      { 'This is initialized in a service' Type: 'success' },
      { 'A second mesage' Type: 'danger' }
    ];
   }

}
