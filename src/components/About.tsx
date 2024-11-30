import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="container pt-32">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Image (Hidden on mobile) */}
        <div className="w-full md:w-1/2 hidden md:block">
          <Image
            className="rounded-lg"
            src="/pink.jpeg"
            alt="About Me"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold">About Me</h2>
          <p className="mt-4 text-lg">
            I am a passionate developer with a strong foundation in web development. I have experience working with various front-end and back-end technologies, and I love building responsive and user-friendly applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
