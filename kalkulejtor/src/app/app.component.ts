import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'kalkulejtor';

  output: number = 0;
  numberValue: number = 0;

  fChoice: string = "";
  sChoice: string = "";
  
  first: number = 0;
  second: number = 0;

  unitToBits: Record<string, number> = {
  b: 1,
  B: 8,
  KB: 8 * 1024,
  MB: 8 * 1024 ** 2,
  GB: 8 * 1024 ** 3,
  TB: 8 * 1024 ** 4,
};

  start(){
    this.first = this.unitToBits[this.fChoice];
    this.second = this.unitToBits[this.sChoice];

    

    // this.output = (this.numberValue * this.first) / this.second;
    this.output = Math.round(((this.numberValue * this.first) / this.second) * 1000) / 1000;

  }
}
