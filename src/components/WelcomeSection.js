import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.section`
  padding: 2rem;
  background: #f3e5f5;
  color: #4a148c;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
  }
`;

const WelcomeSection = () => (
  <WelcomeContainer>
    <h1>Welcome to Our Company</h1>
    <p>Your journey to excellence begins here.</p>
  </WelcomeContainer>
);

export default WelcomeSection;
