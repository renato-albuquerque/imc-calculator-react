import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");   
  
  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "")
  }

  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value)
    setHeight(updatedValue);
  }

  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value)
    setWeight(updatedValue);
  }

  return (
    <div id="calc-container">
        <h2>IMC Calculator</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Height:</label>
                    <input 
                        type="text" 
                        name="height" 
                        id="height" 
                        placeholder="Example 1,75"
                        onChange={(e) => handleHeightChange(e)}
                        value={height}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Weight:</label>
                    <input 
                        type="text" 
                        name="weight" 
                        id="weight" 
                        placeholder="Example 70,5"
                        onChange={(e) => handleWeightChange(e)} 
                        value={weight}
                    />
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calculate" />
                <Button id="clear-btn" text="Clear" action={clearForm} />
            </div>
        </form>
    </div>
  )
}

export default ImcCalc
