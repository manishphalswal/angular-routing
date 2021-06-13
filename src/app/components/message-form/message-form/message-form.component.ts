import { IUserConfirmation } from './../../../interfaces/users/user-confirmation';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit, IUserConfirmation {

  @Input()
  messageSubject: string = "";

  @Input()
  messageContent: string = "";

  constructor() { }

  confirm(): boolean {
    return confirm("Are you sure want to exit?");
  }

  ngOnInit(): void {
  }

}
