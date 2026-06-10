
import { useState } from "react";

const Counter = () => {
     const [count, setCount] = useState(0);

     const increment = () => setCount(count + 1);
     const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
     }

     const reset = () => setCount(0);

     return (
        <div className="flex flex-col items-center gap-5"> 
            <h1
             className="text-[40px] text-center">
              {count}
            </h1>

            <section className="flex gap-5">
                <button onClick={increment}>
                    ADD
                </button>

                <button onClick={reset}>
                    RESET
                </button>

                <button onClick={decrement}>
                    SUBTRACT
                </button>

            </section>
        </div>
     )
 }

 export default Counter;