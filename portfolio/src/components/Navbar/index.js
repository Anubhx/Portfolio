import React from 'react' ; 
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components' ;
// import {DiCssdeck} from 'react-icons/di';
// import { Span } from '../HeroSection/HeroElements';
import { useState } from 'react';
import { FaBars} from 'react-icons/fa';
// import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
 // Import the 'theme' variable from the appropriate file
 const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;
const ColorText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 32px;
`;


export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;
const GitHubButton = styled.a`
background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;
const NavContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;

`;
export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;
const Navbar = () => {
    const [open , setOpen] = useState(false);
    const theme = useTheme()
  return (
   <Nav>
    <NavContainer>
    <NavLogo to="/">
          <ColorText>&lt;</ColorText>Anubhav
          <div style={{ color: theme.primary }}>/</div>Raj
          <ColorText>&gt;</ColorText>
        </NavLogo>
        <MobileIcon>
        <FaBars 
        onClick={() => setOpen(!open)} /> 
        </MobileIcon>
       
        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href= "#blogs">Blog</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
        <GitHubButton href="https://github.com/Anubhx" target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        <ButtonContainer>
        <GitHubButton href="https://www.behance.net/anubhavraj1" target="_blank">Behance Profile</GitHubButton>
        </ButtonContainer>

    </NavContainer>
    { open && (
        <MobileMenu isOpen={open}>
        <MobileLink href="#About" onClick={() => {
          setOpen(!open)
        }}>About</MobileLink>
        <MobileLink href='#Skills' onClick={() => {
          setOpen(!open)
        }}>Skills</MobileLink>
        <MobileLink href='#Experience' onClick={() => {
          setOpen(!open)
        }}>Experience</MobileLink>
        <MobileLink href='#Projects' onClick={() => {
          setOpen(!open)
        }}>Projects</MobileLink>
        <MobileLink href='#blogs' onClick={() => {
          setOpen(!open)
        }}>Blog</MobileLink>
        <MobileLink href='#Education' onClick={() => {
          setOpen(!open)
        }}>Education</MobileLink>
        <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href="https://github.com/Anubhx" target="_blank">Github Profile</GitHubButton>
        <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href="https://www.behance.net/anubhavraj1" target="_blank">Behance Profile</GitHubButton>
      </MobileMenu>
       ) 
    }
   </Nav>
  )
}

export default Navbar;