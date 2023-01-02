import { useEffect, useState } from "react";
import './css/Calculator.scss'

const Calculator = () => {

    const fetchPrediction = async() => {
    
        const response = await fetch('http://127.0.0.1:8000/predict?' + new URLSearchParams({
            age: age | 0,
            sex: sex | 0,
            bmi: BMI | 0,
            smoker: smoker | 0,
            region: region | 0,
            children: children | 0
          })
        )
        const resJSON = await response.json()
    
        setPrediction(resJSON.prediction);
    };
    
    const [prediction, setPrediction] = useState(0)

    const[age, setAge] = useState(0);
    const[sex, setSex] = useState(0);
    const[BMI, setBMI] = useState(0);
    const[smoker, setSmoker] = useState(0);
    const[region, setRegion] = useState(0);
    const[children, setChildren] = useState(0);

    useEffect(() => {
        fetchPrediction()
    }, [age, sex, BMI, region, smoker, children])

    return(
        <section className="calc-container" id="calc">
        <div className="title">Calculator</div>
        <div className="calculator">
            <form className='main-form'>
                <fieldset>
                    <label>Age</label>
                    <input type={'number'} value={age} onChange={(e) => setAge(e.target.value)} name='age'></input>
                </fieldset>
                
                <fieldset>
                    <label>Sex</label>
                    <select value={sex} onChange={(e) => setSex(e.target.value)} name='sex'>
                        <option value={0}>Female</option>
                        <option value={1}>Male</option>
                    </select>
                </fieldset>
                
                <fieldset>
                    <label>BMI</label>
                    <input type={'number'} value={BMI} onChange={(e) => setBMI(e.target.value)} name='bmi'></input>
                </fieldset>

                <fieldset>
                    <label>Smoker</label>
                        <select value={smoker} onChange={(e) => setSmoker(e.target.value)} name='smoker'>
                        <option value={0}>No</option>
                        <option value={1}>Yes</option>
                    </select>
                </fieldset>

                <fieldset>
                <label>Region</label>
                <select value={region} onChange={(e) => setRegion(e.target.value)} name='region'>
                    <option value={0}>Northeast</option>
                    <option value={1}>Northwest</option>
                    <option value={2}>Southeast</option>
                    <option value={3}>Southwest</option>
                </select>
                </fieldset>

                <fieldset>
                    <label>Children</label>
                    <input type={'number'} value={children} onChange={(e) => setChildren(e.target.value)} name='children'></input>
                </fieldset>
            </form>

            <div className="result">
                <div className="label">Prediction</div>
                <div className="amount">${prediction.toFixed(2)}</div>
            </div>
        </div>
        </section>
    );
}

export default Calculator