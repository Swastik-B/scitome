import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
`;

const AuthForm = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: #5a2d82;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0;
  background-color: #5a2d82;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7c4793;
  }
`;

const SwitchMode = styled.p`
  text-align: center;
  cursor: pointer;
  color: #5a2d82;

  &:hover {
    text-decoration: underline;
  }
`;

const AuthPage = ({ setIsAuthenticated, setUser }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    instituteName: '',
    phoneNumber: '',
    instituteId: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    setIsAuthenticated(true);
    setUser({ username: formData.email });
    if (formData.email === 'admin1@scitome') {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleSubmit}>
        <Title>{isSignUp ? 'Sign Up' : 'Log In'}</Title>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {isSignUp && (
          <>
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="instituteName"
              placeholder="Institute Name (Optional)"
              value={formData.instituteName}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number (Optional)"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="instituteId"
              placeholder="Institute ID"
              value={formData.instituteId}
              onChange={handleChange}
              required
            />
          </>
        )}
        <Button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</Button>
        <SwitchMode onClick={toggleSignUp}>
          {isSignUp ? 'Already have an account? Log In' : 'New? Sign Up'}
        </SwitchMode>
      </AuthForm>
    </AuthContainer>
  );
};

export default AuthPage;
