import React from 'react';
import Link from 'next/link';


import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Img } from './AcomplishmentsStyles';
import next from 'next';

const data = [
  { number: 20, text: 'Javascript', image:'/images/javascript-linkedin-badge.png'},
  { number: 1000, text: 'Java', image:'/images/java-linkedin-badge.png'},
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', },
  { number: 20, text: 'Open Source Projects', image:'/images/tree.gif'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', },
  { number: 20, text: 'Open Source Projects', image:'/images/tree.gif'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
          <Img src={card.image}/>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
