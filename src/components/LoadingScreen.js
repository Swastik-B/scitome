import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #4a148c;
  color: #ffc107;
  font-size: 2rem;
  font-weight: bold;
`;

const Spinner = styled.div`
  border: 5px solid rgba(255, 193, 7, 0.2);
  border-top: 5px solid #ffc107;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin-left: 1rem;
`;

const LoadingScreen = () => (
  <LoadingContainer>
    <div>Loading</div>
    <Spinner />
  </LoadingContainer>
);

export default LoadingScreen;
