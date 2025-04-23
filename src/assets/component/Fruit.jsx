export default  function Fruit( {name , emoji ,price , soldout}){
    return (<>
       
       {/* {price >5 ?  <li>     {name} {price}   {emoji} </li>: ("")} */}
          <li>
          {name} {price}   {emoji} {soldout ? "soldout ": ""}
          </li>
        </>)
}
