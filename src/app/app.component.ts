import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odd: number[] =[];
  even: number[] =[];


  onIntervalFired( firedNumber: number ){
   if ( firedNumber % 2 === 0 ){
     this.even.push(firedNumber);
   }else{
     this.odd.push(firedNumber);
   }
  }

}

