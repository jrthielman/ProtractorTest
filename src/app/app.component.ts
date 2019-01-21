import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-test';
  linkText: string;
  buttonText: string = "show";
  styleValue: string = "none";

  value: number = 0;

  hide: boolean = true;

  constructor(){}

  goUp(): void{
    this.value+=1;
  }

  openTab(): void{
    this.hide = !this.hide;
    this.hide ? this.styleValue = "none" : this.styleValue = "initial";
    this.hide ? this.buttonText = "show" : this.buttonText = "hide";
  }
}
