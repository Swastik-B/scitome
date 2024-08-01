import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background: #4a148c;
  color: white;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2024 Company Name. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
