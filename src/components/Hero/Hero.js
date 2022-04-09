import React from 'react';


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Hola, Welcome <br/> I'm Sivaram Vasudevan <br />
          Full  Stack Developer
        </SectionTitle>
        <SectionText>
          Full-Stack-developer / Front-End-Developer / UI -Desgin
        </SectionText>
        <Button  onClick={props.handleClick}>
          <a href="sivaram-Resume.pdf" download='sivaram-Resume.pdf'> Resume</a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;