import { useState } from "react";

export default function Increment() {
  const [count, setcount] = useState(0);
  const [increment, IncrementBy] = useState(1);
  const [deccrement, decrementBy] = useState(1);

  function increments() {
    IncrementBy(increment + 1);
  }

  function decrements() {
    decrementBy(deccrement + 1);
  }

  function handle() {
    setcount(count + increment);
  }

  function Decrement() {
    setcount(count - deccrement);
  }

  function reset() {
    setcount(0);
  }

  function setincrement() {
    IncrementBy(0);
  }

  function setdecrement() {
    decrementBy(0);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          The Count is {count}
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button onClick={handle} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-xl">
            Increment
          </button>
          <button onClick={Decrement} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-xl">
            Decrement
          </button>
          <button onClick={reset} className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-xl">
            Reset
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Increment By: {increment}</h2>
          <div className="flex gap-3">
            <button onClick={increments} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl">
              Increase Increment
            </button>
            <button onClick={setincrement} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-xl">
              Reset Increment
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">Decrement By: {deccrement}</h2>
          <div className="flex gap-3">
            <button onClick={decrements} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl">
              Increase Decrement
            </button>
            <button onClick={setdecrement} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-xl">
              Reset Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
