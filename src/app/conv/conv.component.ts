import {  Component, OnInit } from '@angular/core';
import { LUNGIME } from '../shared/vectors'



@Component({
  selector: 'app-conv',
  templateUrl: './conv.component.html',
  styleUrls: ['./conv.component.css']
})
export class ConvComponent implements OnInit {

  constructor() {  }
  
 
  units: string[] = ['m','m']
  numbers: number[]=[0,0];
  counter = Array;
  lungime =  this.numbers.length;


  valoareaInPlus: number;
  

  ngOnInit(): void {
    
}


  transform(s) {
   
    for(let i of LUNGIME.setUnitati) 
          if (i===this.units[s])
          
       
         {
         //TRANSFORMARE IN METRI  
        
          let index = LUNGIME.setUnitati.indexOf(i);
          let ValueDin = LUNGIME.setValoriDinUnitate[index]
          this.valoareaInPlus = this.numbers[s] * ValueDin
         
        
          
          //TRANSFORMARE DIN METRI
         
          for (let k in this.units) 
            if (s !== k)
               for (let j of LUNGIME.setUnitati)
                 if(j===this.units[k])
                  {
                  let index1 = LUNGIME.setUnitati.indexOf(j)
                  let ValueIn = LUNGIME.setValoriInUnitate[index1]
                  this.numbers[k] = ValueIn * this.valoareaInPlus}
                    
                  }
                  console.log(LUNGIME)
                  console.log(this.units)
                  console.log(this.numbers)



    
  }

   saadaug() {

    this.numbers.push(this.valoareaInPlus)
    this.units.push('m')
 
   
   this.lungime =  this.numbers.length;
   
  //  localStorage.setItem(`this.numbers`, JSON.stringify(this.numbers));
  //  localStorage.setItem(`this.units`, JSON.stringify(this.units));
 
   
    // this.numbers.push(23)
    // setTimeout(() => {return this.numbers });
  }


 sasterg() {
  this.numbers.pop()
  this.units.pop()

 
 this.lungime =  this.numbers.length;
 }






}
