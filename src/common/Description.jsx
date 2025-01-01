import React from 'react'

const Description = ({ text, classStyle }) => {
  return (
      <p className={`description text-white font-normal mb-0 pb-2 ${classStyle}`}>{text}</p>
  )
}

export default Description