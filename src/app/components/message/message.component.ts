import { Component, OnInit } from '@angular/core';
import {MessageService} from "../../../../../../projects angular/angular-tour-of-heroes/src/app/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
