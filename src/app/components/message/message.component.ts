import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messages: string[] = [];
  message$!: Observable<string>;
  newMessage: string = "";
  subscription!: Subscription;

  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.subscription = this.messageService.getMessages().subscribe((message) => {
      console.log(123)
      this.messages.push(message);
    });
    
    // this.message$ = this.messageService.getMessage();
    // // 訂閱消息
    // this.message$.subscribe((message) => {
    //   this.messages.push(message);
    // });
  }
  // sendNewMessage(): void {
  //   // console.log(this.newMessage)
  //   this.message$ = this.messageService.getNewMessage(this.newMessage)
  // }
  addMessage() {
    this.messageService.addMessage(this.newMessage);
    this.newMessage = '';
  }
}
