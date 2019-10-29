import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputedValue: string = '';
  valueToSend: string = '';
  visabilityLogin: boolean = false;
  visabilityRegister: boolean = false;

  flats = [
    {
      city: "Lviv",
      sqM: 80,
      price: 100000
    },
    {
      city: "Kyiv",
      sqM: 60,
      price: 110000
    },
    {
      city: "Odesa",
      sqM: 120,
      price: 125000
    },
    {
      city: "Ternopil",
      sqM: 60,
      price: 40000
    }
  ]

  input(event) {
    this.inputedValue = event.target.value;
  }

  show() {
    this.valueToSend = this.inputedValue;
  }

  renderLogin() {
    this.visabilityLogin = !this.visabilityLogin;
    this.visabilityRegister = false;
  }

  renderRegister() {
    this.visabilityRegister = !this.visabilityRegister;
    this.visabilityLogin = false;
  }

}



