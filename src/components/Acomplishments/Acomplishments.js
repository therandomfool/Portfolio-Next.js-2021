import React from 'react';
import Link from 'next/link';


import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Img } from './AcomplishmentsStyles';
import next from 'next';

const data = [
  {text: 'Javascript', image: '/images/javascript-linkedin-badge.png', link: "https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/JavaScript/report/" },
  {text: 'Java', image: '/images/java-linkedin-badge.png', link: "https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/Java/report/"},
  {text: 'CSS', image: '/images/CSS-linkedin-badge.png', link:"https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/Cascading%20Style%20Sheets%20(CSS)/report/"},
  {text: 'HTML', image: '/images/html-linkedin-badge.png', link:"https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/HTML/report/"},
  {text: 'Git', image: '/images/git-linkedin-badge.png', link:"https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/Git/report/"},
  {text: 'JSON', image: '/images/json-linkedin-badge.png', link:"https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/JSON/report/"},
  {text: 'Frontend Dev', image: '/images/frontend-linkedin-badge.png', link:"https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/Front-end%20Development/report/"},
  {text: 'OOP', image: '/images/oop-linkedin-badge.png', link:"https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/OOP/report/"},
  {text: 'Bash', image: '/images/bash-linkedin-badge.png', link:"https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/Bash/report/"},
  {text: 'React', image: '/images/react-linkedin-badge.png', link:"https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/React.js/report/"},
  {text: 'Node.js', image:'/images/node-linkedin-badge.png', link:"https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/Node.js/report/"},
  {text: 'Wordpress', image:'/images/wp-linkedin-badge.png', link:"https://www.linkedin.com/in/michael-degginger-a00b581ab/detail/assessments/WordPress/report/"},
];

const Acomplishments = () => (
  <Section id="achieve">
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (

        <Box key={index}>
          <BoxNum href={card.link} target="_blank">
            <Img src={card.image} />
            <p >{card.text}</p>
          </BoxNum>
          
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
