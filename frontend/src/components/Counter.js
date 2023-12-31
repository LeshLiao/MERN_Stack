
import React, { useState }  from "react";

function Counter({ initialCount }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div>
            <div>
                Count: <span data-testid="count">{count}</span>
                &nbsp;
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
}
export default Counter;