import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {


  //note: the injected property are also availabe in the view (template i.e messages.component.html)
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    //this returns nothing on initialization
  }

}
