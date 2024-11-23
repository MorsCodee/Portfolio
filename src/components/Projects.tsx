import React from 'react'
import Heading from './Heading'
import Card from './Card'
// import { link } from 'fs'

const data = [
    {
        id: 0,
        title: "ToDo List",
        desc: "A React and Typescript based app for managing and organizing tasks.",
        img: "/todoapp.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
        link: "https://to-do-d18yk7s7o-mehak-s-projects.vercel.app/",
    },
    {
        id: 1,
        title: "CountDown Timer",
        desc: "A Next.js and Typescript based app to track time.",
        img: "/timer.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
        link: "https://timer-mu-sage.vercel.app/",
    },
    {
        id: 2,
        title: "WeatherApp",
        desc: "An Api connected weather app.",
        img: "/weatherappic.png",
        tags: ["React", "Next.Js"],
        link: "https://github.com/MehakFaheem/weather_app",
    },
    { 
        id: 3,
        title: "HopeForHumanity",
        desc: ".A HTML and CSS based responsive charity website.",
        img: "/charity.jpg",
        tags: ["HTML", "CSS"],
        link: "https://hopefor-humanity.vercel.app/"
    }
]
const projects = () => {
  return (
    <div id='projects' className='container pt-10'>
      <Heading data-aos="zoom-in-up" title='Projects'/>
      <div className='grid gap-2 xl:gap-y-7 md:grid-cols-2 lg:grid-cols-2 place-items-center'>
        {data.map((el) => (
        <a href={el.link} target='_blank' rel='noopener noreferrer' key={el.id}>
        <Card
          title={el.title}
          desc={el.desc}
          img={el.img}
          tags={el.tags}
        />
      </a>))}
      </div>
    </div>
  )
}
export default projects
