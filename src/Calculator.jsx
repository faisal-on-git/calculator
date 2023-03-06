import React from 'react'
import './calculator.css'
import { useState, useEffect } from 'react'



const Calculator = () => {
  
    const[firstNumber, setFirstNumber] = useState(0)
const [isError, setIsError] = useState(false)
const[secondNumber, setSecondNumber] = useState(0)
const[operator, setOperator] = useState('')
const[display, setDisplay] = useState('')
const[ans, setAns] = useState(0)
const [hasResult, setHasResult] = useState(false)
const handleCalculation = () => {

const arr = display.split(/([-+*/])/).filter(Boolean);
console.log(arr, 'arr')
let eval1=0;
try{
console.log(eval(display.toString()), 'eval')
eval1=eval(display.toString())

}
catch(err){
    console.log(err,"hi i am erro")
    setIsError(true)
}



// console.log(arr); 
    let second=parseFloat(display.split(operator)[1])
    console.log(second, 'second')
   
      setSecondNumber(second);

    let result = 0
    switch (operator) {
        case '+':
            result = firstNumber + second
            break;
        case '-':
            result = firstNumber - second
            break;
        case '*':
            result = firstNumber * second
            break;
        case '/':
            result = firstNumber / second
            break;
        case '%':
            result = firstNumber % second
            break;
        default:
            break;
    }
    if(result===Infinity || eval1===Infinity){
        setIsError(true)
        setDisplay('Error,Not a valid operation');
        setHasResult(false)
    }
   
   console.log(arr.length, 'length')
   if(isError){
    console.log(isError,'error')
    setDisplay('Error,Not a valid operation');
    setHasResult(false)
   }
    else if(arr.length>3){
        // console.log('more than two numbers')
        // setDisplay('Please select only two numbers')
        // setHasResult(false)
        setAns(eval1)
        setHasResult(true)
      }

     else  if (isNaN(result)) {
        setDisplay('Error,Not a valid operation');
        setHasResult(false)
      }
      else{
        setHasResult(true)
        setAns(result)
        
      }
     
}


const handleClear = () => {
    setDisplay('')
    setFirstNumber(0)
    setSecondNumber(0)
    setOperator('')
    setHasResult(false)
}
const handleOperator = (op) => {

    setFirstNumber(parseFloat(display))
    setOperator(op)
    setDisplay(display + op)
}

const handleBackSpace = () => {
    setDisplay(display.slice(0, -1))
}
  return (
    <div className='calculator'>
    <div className='container'>
       {!hasResult && <div className='calculator-display'>{display}</div>}
         {hasResult && <div className='calculator-display'>{ans}</div>}
        <div className='calculator-keypad'>
        <button className='input-c' onClick={handleClear}>C</button>
        <button className='input' onClick={ handleBackSpace}>X</button>
            <button className='input' onClick={() => setDisplay(display + '1')}>1</button>
            <button className='input' onClick={() => setDisplay(display + '2')}>2</button>
            <button className='input' onClick={() => setDisplay(display + '3')}>3</button>
            <button className='input' onClick={() => setDisplay(display + '4')}>4</button>
            <button className='input' onClick={() => setDisplay(display + '5')}>5</button>
            <button className='input' onClick={() => setDisplay(display + '6')}>6</button>
            <button className='input' onClick={() => setDisplay(display + '7')}>7</button>
            <button className='input' onClick={() => setDisplay(display + '8')}>8</button>
            <button className='input' onClick={() => setDisplay(display + '9')}>9</button>
            <button className='input' onClick={() => setDisplay(display + '0')}>0</button>
            <button className='input' onClick={() => setDisplay(display + '.') }>.</button>
            <button className='input' onClick={()=>handleOperator('+')}>+</button>
            <button className='input' onClick={()=>handleOperator('-')}>-</button>
            <button className='input' onClick={()=>handleOperator('*')}>*</button>
            <button className='input' onClick={()=>handleOperator('/')}>/</button>
            {/* <button className='input' onClick={()=>handleOperator('%')}>%</button> */}
            <button className='result' onClick={handleCalculation}>=</button>
           
</div>
            
    </div>
    </div>
  )
}

export default Calculator




//things to hadle
//1. if user press operator first then it should not work
//2. if user press operator more than once then it should not work
//3. if user press operator after result then it should not work
//4.if more than one operator is pressed then it should not work
//5. if user wants calculation of more than two numbers then it should be handled