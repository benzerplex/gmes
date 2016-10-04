import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'app works!';
  public value:number;
  
  constructor() {
    this.value = 0;
  }

  public up() {
    this.value--;
  }

  public down() {
    this.value++;
  }

  public handleElevator(value) {
    console.log("finished: " + value);
  }
}
