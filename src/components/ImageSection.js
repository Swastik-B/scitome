import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f4f4f9;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 8px;
`;

const ImageSection = () => {
  const containerRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && containerRef.current) {
      containerRef.current.classList.add('in-view');
    }
  }, [inView]);

  return (
    <Section>
      <ImageContainer ref={containerRef}>
        <Image ref={ref} src="C:\Users\swast\OneDrive\Desktop\New folder\Arctic-Fox.jpg" alt="Image 1" />
        <Image ref={ref} src="C:\Users\swast\OneDrive\Desktop\New folder\Facebook Icon.jpg" alt="Image 2" />
      </ImageContainer>
    </Section>
  );
};

export default ImageSection;
