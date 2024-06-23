import React, {useState} from 'react'; 

function IfElseCondn(){

    const [userNum, setUserNum] = useState(0) 

    return (
        <div>
            {userNum == 1 ? <h1> welcome user 1</h1> : userNum == 2 ? <h1> welcome user 2</h1> : <h1> welcome guest</h1> }
            <button onClick={()=>setUserNum(userNum+1)}>userNum ++</button>
        </div>
    )

}

export default IfElseCondn;
