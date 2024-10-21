import React from 'react'

interface propsType {
    title: string;
}
const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-5xl pb-8 py-10px font-bold'>
        <p>{title}</p>
    </div>
  )
}
export default Heading
