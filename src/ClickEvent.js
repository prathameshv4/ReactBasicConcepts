
function ClickEvent(){

    let data = "prathamesh"
    
    function btnClick(){
        data = "peter"
        alert("btn click "+data);
    }

    return (
        <div className="app">
            data = {data} -- will not update even after changing data
            <button onClick={btnClick} >Click button</button>
            <button onClick={()=>btnClick()} >Click button arrow fn</button>
        </div>
    );
}

export default ClickEvent;