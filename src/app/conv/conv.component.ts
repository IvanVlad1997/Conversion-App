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
          
       
         {
         //TRANSFORMARE IN METRI  
          console.log(LUNGIME.setUnitati.indexOf(i))
          console.log(this.units[s]);
          let index = LUNGIME.setUnitati.indexOf(i);
          let ValueDin = LUNGIME.setValoriDinUnitate[index]
          console.log(ValueDin)
          this.valoareaInPlus = this.numbers[s] * ValueDin
          console.log('Valoarea in metri este ' +  this.valoareaInPlus)
        
          
          //TRANSFORMARE DIN METRI
          for (let j of LUNGIME.setUnitati)
            if(j==this.units[1])
              {console.log(LUNGIME.setUnitati.indexOf(j))
              console.log(this.units[1]);
              let index1 = LUNGIME.setUnitati.indexOf(j)
              let ValueIn = LUNGIME.setValoriInUnitate[index1]
              console.log(ValueIn)
              this.numbers[1] = ValueIn * this.valoareaInPlus}
              
        }

      


    
  }

  saadaug() {
    let index = LUNGIME.setUnitati.indexOf('cm')
    console.log(LUNGIME)
    console.log(index)
    // this.numbers.push(23)
  }
 





}
