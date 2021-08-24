import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiCardJoker } from "react-icons/gi";
import { MdPictureAsPdf } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <>
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <GiCardJoker size="8rem" title="PORTFOLIO SITE"/> <span>Michael Degginger</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
    </Container>
    
      <Div3>
        <SocialIcons href="https://github.com/therandomfool" target="_blank" title="GITHUB">
          <AiFillGithub size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/michael-degginger-a00b581ab/" target="_blank" title="LINKEDIN">
          <AiFillLinkedin size="4rem" />
        </SocialIcons>
        <SocialIcons href="./images/MDResume.pdf" target="_blank" title="RESUME">
          <MdPictureAsPdf size="4rem"/>
        </SocialIcons>
        <SocialIcons href="mailto:michaeldegginger@gmail.com" target="_blank" title="EMAIL">
          <HiOutlineMailOpen size="4rem"/>
        </SocialIcons>
      </Div3>
    </>
);

export default Header;
