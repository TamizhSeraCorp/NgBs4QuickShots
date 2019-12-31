import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-stealthbox',
  templateUrl: './stealthbox.component.html',
  styleUrls: ['./stealthbox.component.scss']
})
export class StealthboxComponent implements OnInit {
  constructor() {}

  stealthy = true;

  @ContentChild('stealthy', { static: false })
  input;

  ngOnInit() {}
  toggle() {
    this.stealthy = !this.stealthy;
    if (!this.stealthy) {
      this.input.nativeElement.type = 'text';
    } else {
      this.input.nativeElement.type = 'password';
    }
  }
}
