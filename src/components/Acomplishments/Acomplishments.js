import React from 'react';


import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Img } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects', image:'/images/tree.gif'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <Img src={card.image} />
          {/* <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText> */}
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
