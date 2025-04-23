import Fruit from "./Fruit";
export default function Object() {
  const FruitList = [
    { name: "Apple", price: "40", emoji: "🍎" ,soldout :true },
    { name: "Orange", price: "5", emoji: "🍊" ,soldout :false},
    { name: "banana", price: "30", emoji: "🍌",soldout :false },
  ];
  return (
    <div>
      <h1>
        <ul>
          {FruitList.map((frt) => (
              <Fruit key={frt.name} name={frt.name} price={frt.price} emoji={frt.emoji} soldout= {frt.soldout}/>
          
          ))}
        </ul>
      </h1>
    </div>
  );
}
