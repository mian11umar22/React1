import { useState } from 'react'
 import Hello from './assets/component/Hello'
 import Props from './assets/component/Props'
import Array from './assets/component/Array'
import Object from './assets/component/Object'
import Fruit from './assets/component/Fruit'
import Condtional from './assets/component/Conditional'
import Message from './assets/component/Message'
import Increment from './assets/component/Increment'
 

function App() {
   
const person={
  'name':'mian',
  'last':'umar',
  'emoji':'empty',
  'number':[1,,4,65,6]
}
  return (
    <div className="App">
     {/* <Hello /> 
<Props person={person} />
<Array />  */}
{/* <Object />
<Condtional />
<Message /> */}
<Increment />
 
    </div>
     
  )
}

export default App
