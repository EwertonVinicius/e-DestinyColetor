import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <small *ngIf="temErro()" class="p-invalid">{{ text }}</small>
  `,
  styles: [
  ]
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
