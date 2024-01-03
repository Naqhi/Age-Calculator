import React, { useState } from "react";
import './AgeCalculator.css';

const AgeCalculator = () => {

const [birthdate, setBirthdate]= useState('');
const [age, setAge]= useState(0);

const calculateAge = () =>{
    const today = new Date();
    const birthdateDate = new Date(birthdate)

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
        age--;
    }
    setAge(age);
}

const Reset = () =>{
    setBirthdate('');
    setAge(0);
}

    return (
        <div className="Conatiner">
            <h2 className="heading container_title">Age Calculator</h2>
            <p className="para conatiner_title"> The age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years </p>

            <div className="Container_middle">
                <div className="right">
                    <h4>Date of Birth</h4>
                    <input className="date" type="date"  value={birthdate} onChange={e =>setBirthdate(e.target.value)}/>
                    <div className="button_div">
                        <button className='button-65' onClick={calculateAge}>Calculate Age</button>
                        <button className="button-65" onClick={Reset}>Reset</button>
                    </div>
                </div>
                <div className="left">
                    <div className='Container_middle_para'>
                        <h1>Your Age is</h1>
                        <h1 className='age_heading'>{age > 0 ? `${age}`: ``}</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AgeCalculator