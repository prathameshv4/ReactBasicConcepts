import React, {useState} from "react";

function InputField(){

    const [data, setData] = useState(null);

    function changeInputValue(event1){
        console.log('changeInputValue - ',event1.target.value);
        setData(event1.target.value)
    }

    return (
        <div>
            <input type="text" onChange={changeInputValue} placeholder="enter value"></input>
            { data && data.length >5 ?
            <p>{data}</p>  :  <p>empty data</p> }
        </div>
    )
}
export default InputField;