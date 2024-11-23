import React from 'react'
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({title, img,}) => {
  return (
    <div>
        <div  data-aos="zoom-in-up"className='w-[500px] sm:w-[500px] h-auto'>
            <Image className='rounded-3xl'
            src={img}
            width={500}
            height={500}
            alt={title}
            />
        </div>

        {/* <div className='p-4 space-y-4 bg-'>
            <div className='text-4xl font-extralight'>{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el) => (
                <div className='tags' key={el}>
                    {el}
                </div>))}
            </div>
        </div>  */}
    </div>
  )
}
export default Card
