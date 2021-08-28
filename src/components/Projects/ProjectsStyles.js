import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:20rem;
  margin-top: 40px;
  object-fit: fill;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.xs} {
    object-fit: fill;
    width: 80%;
    margin-top: 30px;
  }
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
// place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.99999);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    border: .5px solid rgba(255, 223, 0, 0.39999);
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding-top: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    padding-top: 0;
  }
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '2rem' : '1.5rem'};
`;

export const Hr = styled.hr`
  width: 90%;
  height: 3px;
  margin: 20px auto;
  border: 1px solid black;
  border-radius: 50%;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: ghostwhite;
  font-size: 1.314rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:0;
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin .75rem 0;
  }
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
border: 1px solid #6b3030;
// background: #6b3030;
border-radius: 15px;
transition: 0.5s;
width: 129px;
cursor: pointer;
&:hover{
  background: #801414;
  border: 1px solid ghostwhite;
}
@media ${(props) => props.theme.breakpoints.sm} {
  padding: .15rem;
  font-size: 1.25rem;
  
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 16px;
  padding: 1rem;
}
`
export const Tag = styled.li`
color: #d8bfbf;
font-weight: bold;
font-size: .89em;
`