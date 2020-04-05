import React from 'react';
import Grid from '@bit/jakeprins.react-milkshake.grid';
import styled from 'styled-components'
import Input from './input.js';

const H2 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: rgb(108, 116, 138);
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const FooterArea = styled.footer`
  padding: 2em;
  background-color: #282B33;
`;

class Footer extends React.Component {
    render () {
        return (
            
            <FooterArea>
               <H2>Clintronix</H2>
               <Input></Input>
            </FooterArea>
          
            
        );
    }
}

export default Footer;