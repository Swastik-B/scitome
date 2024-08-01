import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #4a148c;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #ffeb3b; /* Outline */
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: #ffeb3b;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -3px;
    left: 0;
    background-color: #ffeb3b;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Navbar = ({ isAuthenticated }) => {
  return (
    <NavbarContainer>
      <Logo>Scitome</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/input">Publish</NavLink>
        <NavLink to="/display">Display</NavLink>
        {!isAuthenticated && <NavLink to="/auth">Login</NavLink>}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
