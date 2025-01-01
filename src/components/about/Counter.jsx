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
      <div className='container container-width pt-5'>
          <h3 className='product mb-0 mx-auto text-center text-white'>Usestate</h3>
          <div className='text-center'>
              <p className='description mb-0 text-center mx-auto pb-3 text-white'>{ value}</p>
              <div className='flex justify-center gap-2'>
                  <button className='p-2' onClick={increment}>Increment</button>
                  <button className='p-2' onClick={decrement}>decrement</button>
              </div>
          </div>

          <div className='text-center'>
              <p className='product pt-5 mb-0 text-white'>UseEffect</p>
              <p className='description mb-0 text-center mx-auto text-white'>{count}</p>
          </div>

          <div className='text-center'>
              <p className='product pt-5 mb-0 text-white'>For Loop</p>
              <p className='description mb-0 text-center mx-auto text-white'>{number}</p>
          </div>
    </div>
  )
}

export default Counter