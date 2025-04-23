export default function Array() {
  const array = [1, 3, 4, 5, 6, 6, 6, 5, 433, 3, 43, 43, 2, 43];
  return (
    <div>
       
        <ul>
        {array.map((arr) => (
          <li key={arr}> {arr} </li>
        ))} 
       </ul>
    </div>
  );
}
