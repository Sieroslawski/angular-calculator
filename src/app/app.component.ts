import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  // Multi-line content allowed with back ticks.
  templateUrl: './app.html'  
})

export class AppComponent { 
  public resultAdd!:number;     // *** If we use 'this' we must have a class level declaration.
  public resultSubtract!:number;
  public resultMultiply!:number;
  public resultDivide!:number;
  public Operand1!:string;  
  public Operand2!:string;
  public Operand3!:string;  
  public Operand4!:string;  
  public Operand5!:string;  
  public Operand6!:string;  
  public Operand7!:string;  
  public Operand8!:string;   
  public formOperand1!:string;   
  public formOperand2!:string;

    doAddition() {      
      this.resultAdd=Number(this.Operand1) +  Number(this.Operand2);
      this.formOperand1 = this.Operand1;
      this.formOperand2 = this.Operand2;
      this.Operand1 = '';
      this.Operand2 = '';
      this.Operand3 = '';
      this.Operand4 = '';
      this.Operand5 = '';
      this.Operand6 = '';
      this.Operand7 = '';
      this.Operand8 = '';
      this.resultSubtract = Number('');
      this.resultMultiply = Number('');
      this.resultDivide = Number('');      
    }
    doSubtraction() {
      var subtractResult;
      subtractResult=Number(this.Operand3) - Number(this.Operand4);
      this.resultSubtract = Number(subtractResult.toFixed(2));
      this.formOperand1 = this.Operand3;
      this.formOperand2 = this.Operand4;
      this.Operand1 = '';
      this.Operand2 = '';
      this.Operand3 = '';
      this.Operand4 = '';
      this.Operand5 = '';
      this.Operand6 = '';
      this.Operand7 = '';
      this.Operand8 = '';
      this.resultAdd = Number('');
      this.resultMultiply = Number('');
      this.resultDivide = Number('');    
    }
    doMultiplication() {
      var multiplyResult;
      multiplyResult=Number(this.Operand5) * Number(this.Operand6);
      this.resultMultiply = Number(multiplyResult.toFixed(2));
      this.formOperand1 = this.Operand5;
      this.formOperand2 = this.Operand6;
      this.Operand1 = '';
      this.Operand2 = '';
      this.Operand3 = '';
      this.Operand4 = '';
      this.Operand5 = '';
      this.Operand6 = '';
      this.Operand7 = '';
      this.Operand8 = '';
      this.resultAdd = Number('');
      this.resultSubtract = Number('');
      this.resultDivide = Number(''); 
    }
    doDivision() {
      var divideResult;
      divideResult=Number(this.Operand7) / Number(this.Operand8);
      this.resultDivide = Number(divideResult.toFixed(2));
      this.formOperand1 = this.Operand7;
      this.formOperand2 = this.Operand8;
      this.Operand1 = '';
      this.Operand2 = '';
      this.Operand3 = '';
      this.Operand4 = '';
      this.Operand5 = '';
      this.Operand6 = '';
      this.Operand7 = '';
      this.Operand8 = '';
      this.resultAdd = Number('');
      this.resultMultiply = Number('');
      this.resultSubtract = Number(''); 
    }        
  }

  


  

  