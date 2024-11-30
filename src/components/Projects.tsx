import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "ToDo List",
    img: "/todoapp.jpg",
    link: "https://to-do-d18yk7s7o-mehak-s-projects.vercel.app/",
  },
  {
    id: 1,
    title: "CountDown Timer",
    img: "/timer.jpg",
    link: "https://timer-mu-sage.vercel.app/",
  },
  {
    id: 2,
    title: "WeatherApp",
    img: "/weatherappic.png",
    link: "https://github.com/MehakFaheem/weather_app",
  },
  {
    id: 3,
    title: "HopeForHumanity",
    img: "/charity.jpg",
    link: "https://hopefor-humanity.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-10">
      <Heading data-aos="zoom-in-up" title="Projects" />
      <div className="grid gap-4 xl:gap-y-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <a
            href={el.link}
            target="_blank"
            rel="noopener noreferrer"
            key={el.id}
            className="hover:scale-105 transform transition duration-300"
          >
            <Card title={el.title} img={el.img} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
