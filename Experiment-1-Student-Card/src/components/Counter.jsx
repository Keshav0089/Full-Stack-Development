import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter</h2>
      <h1>{count}</h1>

      <button onClick={()=> setCount(count+1)}>Decrease</button><br/>
      <button onClick={()=> setCount(count*count)}>Increase</button><br/>
      <button onClick={()=> setCount(count/(count*count))}>Reset</button>
    </div>
  );
};

export default Counter;