import styles from "./App.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Display from './components/Display'
import ButtonsContainer from "./components/ButtonsContainer"
import { useState } from "react"


function App() {
  let [calVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      //when c is pressed everything should go
      setCalVal("");
    }
    else if(buttonText==='='){
      //evaluate and pass that into setCalval.
        const result=eval(calVal);
        setCalVal(result);
    }
    else{
      //add numbers to previous value and display in input box
      const newDisplayValue=calVal+buttonText;
      setCalVal(newDisplayValue);
    }
  }


  return <div className={styles.calculator}>
    <Display displayValue={calVal}/>
    {/* buttons for calculator */}
    <ButtonsContainer onButtonClick={onButtonClick}/>
  </div>
  }

export default App
