// function Props(props){
//     return <h1> 
//         {props.name} {props.last}
//     </h1>
// }
// Destructing Props
// function Props({name , last , emoji}){
//     return <p> 
//         {name} 
//         <br></br>
//         {last}
//         <br />
//         {emoji}
//     </p>
// }
function Props({person}){
    return(
    <div>
    <h1> 
        {person.name}
        {person.number}
    </h1>
    </div> )
};
export default Props;