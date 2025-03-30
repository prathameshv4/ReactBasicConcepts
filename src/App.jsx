import logo from './logo.svg';
import './App.css';
import User from './User';
import Classcomponent from './Classcomponent';
import ClickEvent from './ClickEvent';
import State from './State';
import StateClass from './State';
import Props from './Props';
import { useState } from 'react';
import { PropsClassComp } from './Props';
import InputField from './InputField'
import Form from './Form'
import IfElseCondn from './IfElseCondn'
import FormValidations from './FormValidations'



function App() {


  function AppleInside() {
    return (
      <div>
        AppleInside Functn..
      </div>
    )
  }

  function appFunctn() {
    alert('In app function');
  }

  // Props data
  const data1 = { name: 'prathamesh', email: 'prathamesh@gmail.com' }
  const [data2, setData] = useState({ name: 'prathamesh', email: 'prathamesh@gmail.com' })
  return (
    <div className="App">

      <AppleInside />
      <AppleOutside />
      <User />
      <Classcomponent></Classcomponent>

      <ClickEvent />

      <State />
      <StateClass />

      <Props params={data1} />
      <Props params={data2} />

      <Props params={AppleInside} />
      <button onClick={() => {
        setData({ name: 'Vasekar', email: 'vasekar@gmail.com' })
      }}>update data2</button>
      <PropsClassComp name='hiiiii' ></PropsClassComp>

      <InputField></InputField>

      <Form />
      <IfElseCondn />

      {/* 
      */}
      <Props params={appFunctn} />

      <FormValidations />
    </div>
  );
}

function AppleOutside() {
  return (
    <div>
      AppleOutside Functn.. {10 + 20}
    </div>
  )
}

export default App;

