import {  Component, OnInit } from '@angular/core';
import { LUNGIME , TIMP} from '../shared/vectors'
import {Vector} from '../shared/vector'


@Component({
  selector: 'app-conv',
  templateUrl: './conv.component.html',
  styleUrls: ['./conv.component.css']
})
export class ConvComponent implements OnInit {

  constructor() {  }
  chose: string ="LUNGIME";
 
  choseUnit : Vector =LUNGIME;
  
  counter = Array;
  





  ngOnInit(): void {
    
}

changeSelect() {
  switch (this.chose) {
    case 'LUNGIME' :{
      this.choseUnit  =LUNGIME;
      break;
    }
    case 'TIMP' : {
      this.choseUnit = TIMP;
      break;
    }
    default: {
      this.choseUnit = LUNGIME;
    }
      
  }
}

  transform(s) {
   console.log(this.choseUnit)
    for(let i of this.choseUnit.setUnitati) 
          if (i===this.choseUnit.units[s])
          
       
         {
         //TRANSFORMARE IN METRI  
        
          let index = this.choseUnit.setUnitati.indexOf(i);
          let ValueDin = this.choseUnit.setValoriDinUnitate[index]
          this.choseUnit.valoareInPlus = this.choseUnit.numbers[s] * ValueDin
         
        
          
          //TRANSFORMARE DIN METRI
         
          for (let k in this.choseUnit.units) 
            if (s !== k)
               for (let j of this.choseUnit.setUnitati)
                 if(j===this.choseUnit.units[k])
                  {
                  let index1 = this.choseUnit.setUnitati.indexOf(j)
                  let ValueIn = this.choseUnit.setValoriInUnitate[index1]
                  this.choseUnit.numbers[k] = ValueIn * this.choseUnit.valoareInPlus}
                    
                  }
                  console.log(this.choseUnit)
                  console.log(this.choseUnit.units)
                  console.log(this.choseUnit.numbers)



    
  }

   saadaug() {
     

    this.choseUnit.numbers.push(this.choseUnit.valoareInPlus)
    this.choseUnit.units.push(this.choseUnit.principal)
 
   
   this.choseUnit.lungime =  this.choseUnit.numbers.length;
   
  //  localStorage.setItem(`this.choseUnit.numbers`, JSON.stringify(this.choseUnit.numbers));
  //  localStorage.setItem(`this.choseUnit.units`, JSON.stringify(this.choseUnit.units));
 
   
    // this.choseUnit.numbers.push(23)
    // setTimeout(() => {return this.choseUnit.numbers });
  }


 sasterg() {
  this.choseUnit.numbers.pop()
  this.choseUnit.units.pop()

 
 this.choseUnit.lungime =  this.choseUnit.numbers.length;
 }






}
