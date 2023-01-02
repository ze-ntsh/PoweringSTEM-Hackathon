import { useEffect, useState } from "react";
import './css/Calculator.scss'

const Calculator = () => {

    const fetchPrediction = async() => {

        console.log(age)

        if(age <= 0 || sex === "" || BMI <= 0 || smoker === "" || region === "" || children < 0){
            setPrediction(0)
        } else { 
            const response = await fetch('https://w9qi0f.deta.dev/predict?' + new URLSearchParams({
                age: age,
                sex: sex,
                bmi: BMI,
                smoker: smoker,
                region: region,
                children: children
            })
            )
            const resJSON = await response.json()
        
            setPrediction(resJSON.prediction);
        }
    };
    
    const [prediction, setPrediction] = useState(0)

    const[age, setAge] = useState(0);
    const[sex, setSex] = useState("");
    const[BMI, setBMI] = useState(0);
    const[smoker, setSmoker] = useState("");
    const[region, setRegion] = useState("");
    const[children, setChildren] = useState(-1);

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
                    <input type={'number'} value={age<=0?"":age} onChange={(e) => setAge(e.target.value)} name='age'></input>
                </fieldset>
                
                <fieldset>
                    <label>Sex</label>
                    <select value={sex} onChange={(e) => setSex(e.target.value)} name='sex'>
                        <option value={""}></option>
                        <option value={0}>Female</option>
                        <option value={1}>Male</option>
                    </select>
                </fieldset>
                
                <fieldset>
                    <label>BMI</label>
                    <input type={'number'} value={BMI<=0?"":BMI} onChange={(e) => setBMI(e.target.value)} name='bmi'></input>
                </fieldset>

                <fieldset>
                    <label>Smoker</label>
                        <select value={smoker} onChange={(e) => setSmoker(e.target.value)} name='smoker'>
                        <option value={""}></option>
                        <option value={0}>No</option>
                        <option value={1}>Yes</option>
                    </select>
                </fieldset>

                <fieldset>
                <label>Region</label>
                <select value={region} onChange={(e) => setRegion(e.target.value)} name='region'>
                    <option value={""}></option>
                    <option value={0}>Northeast</option>
                    <option value={1}>Northwest</option>
                    <option value={2}>Southeast</option>
                    <option value={3}>Southwest</option>
                </select>
                </fieldset>

                <fieldset>
                    <label>Children</label>
                    <input type={'number'} value={children<0?"":children} onChange={(e) => setChildren(e.target.value)} name='children'></input>
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