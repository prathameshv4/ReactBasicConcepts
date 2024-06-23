import React, { useState } from "react";

function Form() {

    const [name, setName] = useState(''); 
    const [interest, setInterest] = useState(null); 
    const [tnc, setTnc] = useState(null); 

    function submitForm(e) {
        console.log(name,'-', interest,'-', tnc);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder="enter name" /><br />
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>Select option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select><br />
                <input type="checkbox" id="tnc" onChange={(e)=>setTnc(e.target.checked)} /> <label for="tnc">Accept terms & condn</label><br/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form;