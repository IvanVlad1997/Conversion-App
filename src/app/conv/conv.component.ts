import { Component, OnInit } from '@angular/core';
import { LUNGIME } from '../shared/vectors'

@Component({
  selector: 'app-conv',
  templateUrl: './conv.component.html',
  styleUrls: ['./conv.component.css']
})
export class ConvComponent implements OnInit {

  constructor() { }
  
 
  units: string[] = ['m','m']
  numbers: number[]=[0,0];
  counter = Array;
  lungime =  this.numbers.length;


  valoareaInPlus: number;

  ngOnInit(): void {
   
  }

  transform(s) {
    console.log(this.units)
    console.log(this.numbers)
    console.log(LUNGIME.setUnitati)
    console.log(LUNGIME.setValoriDinUnitate)
    console.log(LUNGIME.setValoriInUnitate)
    console.log(this.numbers.length)
    if (s === 0 ) for(let i of LUNGIME.setUnitati) 
          if (i===this.units[s])
          
         { console.log(LUNGIME.setUnitati.indexOf(i))
          console.log(this.units[s]);
          let index = LUNGIME.setUnitati.indexOf(i);
          let ValueDin = LUNGIME.setValoriDinUnitate[index]
          console.log(ValueDin)
          this.valoareaInPlus = this.numbers[s] * ValueDin
          console.log('Valoarea in metri este ' +  this.valoareaInPlus)
          
        }
    // this.valoareaInPlus
    // if (this.units[0]==="cm" && s ===0 ) {this.numbers[1]=this.numbers[0]/10}
    // else if (this.units[0]=="cm" && s===1) this.numbers[0]=this.numbers[1]*10
    //   else if (this.units[1]=="cm" && s===1) this.numbers[0]=this.numbers[1]*10
    
  }

  saadaug() {
    let index = LUNGIME.setUnitati.indexOf('cm')
    console.log(LUNGIME)
    console.log(index)
    // this.numbers.push(23)
  }
 





}
