import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: ` <small *ngIf="temErro()" class="p-invalid">{{ text }}</small>
  `,
  styleUrls: []
})
export class MessageComponent implements OnInit {

  constructor() { }

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;



  ngOnInit(): void {
  }
  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;

  }
}
