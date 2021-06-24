import { Component } from '@angular/core';
import {MessageService} from "../../../../projects angular/angular-tour-of-heroes/src/app/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userName = 'Tom';
  message = 'Show details';
  toggle = false;

  constructor(public messageService: MessageService) { }

  cleanInput() {
   this.userName= '';
  }

  showDetails() {
    this.toggle = !this.toggle;
    this.toggle ?  this.message = 'Show details': this.message = 'Hide details';
    this.messageService.add(this.message);
  }

}
