import C1 from "./C1";
import C2 from "./C2";

export default function Condtional() {
  let display = false;
//   if (display) {
//     return <C1 />;
//   } else {
//     return <C2 />;
//   }
// let message;
// if(display){                                         //------------------->if else Operator 
//     message = <h1>If condition is True</h1>
// }else{
//     message = <h1> If condition is false</h1>
// }
// return message;
// return display ? <h1> True</h1> : <h2>Flase</h2>   //------------------->Ternary Operator 

return display ? <C1 /> : <C2 />
}
