import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marketing-portal';
  data = 'Hello Code';

  paymentHandler:any = null;

  getVal() {
    return 'Step by step'
  }
}