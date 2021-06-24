import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
    .wrapper {
    margin: 1rem auto;
    border: 1px solid green;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 50%;
    }
    .message {
       color: green;
       text-align: center;
       }`
  ]
})
export class SuccessAlertComponent {
  successMessage = 'Awesome! You can read this message successfully!';

  constructor() { }

}
