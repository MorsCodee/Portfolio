import React from 'react';
import { Icon } from '@iconify/react';

const Skills = () => {
  return (
    <div data-aos="zoom-in-up" id="Skills" className="container pt-32 font-bold">
      <div className="flex flex-col md:grid-cols-2 gap-20 items-center justify-center">
        <div>
          <h2 className="text-4xl md:text-5xl items-center justify-center">Skills</h2>
        </div>
        <div>
          <div className="flex flex-wrap justify-center space-x-4 text-accent">
            {/* Icons with responsive sizes */}
            <Icon icon="logos:html-5" width="30" height="30" className="sm:w-36 sm:h-36 md:w-40 md:h-40" />
            <Icon icon="logos:css-3" width="30" height="30" className="sm:w-36 sm:h-36 md:w-40 md:h-40" />
            <Icon icon="logos:tailwindcss-icon" width="30" height="30" className="sm:w-36 sm:h-36 md:w-40 md:h-40" />
            <Icon icon="logos:nextjs-icon" width="30" height="30" className="sm:w-36 sm:h-36 md:w-40 md:h-40" />
            <Icon icon="logos:react" width="30" height="30" className="sm:w-36 sm:h-36 md:w-40 md:h-40" />
            <Icon icon="logos:typescript-icon" width="30" height="30" className="sm:w-36 sm:h-36 md:w-40 md:h-40" />
            <Icon icon="logos:python" width="30" height="30" className="sm:w-36 sm:h-36 md:w-40 md:h-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
