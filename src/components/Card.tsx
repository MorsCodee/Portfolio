import React from 'react';
import Image from 'next/image';

interface propsType {
  title: string;
  img: string;
}

const Card: React.FC<propsType> = ({ img }) => {
  return (
    <div>
      <div
        data-aos="zoom-in-up"
        className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto"
      >
        <Image
          className="rounded-3xl"
          src={img}
          width={500}
          height={500}
          alt="Project Thumbnail"
        />
      </div>
    </div>
  );
};

export default Card;
