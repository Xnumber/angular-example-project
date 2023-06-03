import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // private messages: string[] = ['Hello', 'World', '!'];
  private messagesSubject: Subject<string> = new Subject<string>();

  constructor() { }

  // getMessage(): Observable<string> {
  //   // 傳回一個 Observable，用來監聽消息的變化
  //   return of(...this.messages);
  // }

  getMessages(): Observable<string> {
    return this.messagesSubject.asObservable();
  }

  // getNewMessage(msg: string): Observable<string>{
  //   return of(msg);
  // }

  addMessage(message: string) {
    this.messagesSubject.next(message);
  }
}