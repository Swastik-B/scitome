import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 2rem;
  background: #fff;
  color: #6a1b9a;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .service {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ServicesSection = () => (
  <ServicesContainer>
    <h2>Our Services</h2>
    <div className="service">Service 1</div>
    <div className="service">Service 2</div>
    <div className="service">Service 3</div>
  </ServicesContainer>
);

export default ServicesSection;
