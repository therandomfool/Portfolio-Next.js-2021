import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Michael is a highly skilled developer with a firm understanding of Object Oriented and Functional Programming design patterns. He is a graduate of both Skill Distillery and FastTrack  full-stack Java/JavaScript programs and has created full stack RESTful Web Services for personal and educational projects using MySQL, PostgreSQL, Hibernate, Spring, P5.JS, Node.js, jQuery, HTML, and CSS. His prior experiences include extensive restaurant / hospitality management and consultation, which imparts him with a continuing passion for teamwork and accomplishing goals through effective collaboration.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;