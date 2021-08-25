import React from 'react';
import { FiDatabase } from "react-icons/fi";
import { GiServerRack, GiAbstract025 } from "react-icons/gi";
import { BsDisplayFill } from "react-icons/bs";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <BsDisplayFill size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JavaScript <br />
            CSS <br />
            HTML <br />
            Bootstrap4 <br />
            React <br />
            Angular <br />
            Next.js <br />
            P5.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiServerRack size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Java <br />
            Spring Boot <br />
            Node
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FiDatabase size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MySQL <br />
            PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiAbstract025 size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Technologies</ListTitle>
          <ListParagraph>
            GitHub <br />
            Asana <br />
            Jira <br />
            Visual Studio Code <br />
            Google Search <br />
            Postman <br />
            PG Admin <br />
            MySQL Workbench <br />
            Stack Overflow
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
