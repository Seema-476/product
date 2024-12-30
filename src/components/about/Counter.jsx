import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(9);
    const increment = () => {
        setValue(value + 1);
    };
    const decrement = () => {
        setValue(value - 1);
    };
    useEffect(() => {
        if (count >= 100) {
            setTimeout(false);
            return
        }
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    },);

    useEffect(() => {
        for (let i = 9; i >= 0; i--) {
            setTimeout(() => {
                setNumber(i);
            }, (9 - i) * 1000);
        }
    }, []);

  return (
      <div className='container max-w-1440 pt-5'>
          <h3 className='product mb-0'>Increment Decrement</h3>
          <div className='text-center'>
              <p className='description mb-0 text-center mx-auto pb-3'>{ value}</p>
              <button onClick={increment}>Increment</button>
              <button onClick={decrement}>decrement</button>
          </div>

          <div className='text-center'>
              <p className='product pt-5 mb-0'>Timer</p>
              <p className='description mb-0 text-center mx-auto'>{count}</p>
          </div>

          <div className='text-center'>
              <p className='product pt-5 mb-0 '>Count</p>
              <p className='description mb-0 text-center mx-auto'>{number}</p>
          </div>
    </div>
  )
}

export default Counter