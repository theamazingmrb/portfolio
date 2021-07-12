import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes }  from 'styled-components';
import logo from '../images/Circle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const NavStyles = styled.nav`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: flex;
    align-items: center;
  }

  ul li {
    margin: 0 2em;
  }
  a {
    font-size: 1.5rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--red);
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  max-height: 150px;
  filter: brightness(0) invert(1);
  animation: ${rotate360} infinite 10s linear;
  transition: max-height 0.05s linear;
  &:hover {
    max-height: 175px;
    animation: ${rotate360} infinite 2s linear;
  };
`;

export default function Header({toggleTheme, theme}) {
  console.log(theme)
  return (
    <NavStyles>
      <Logo src={logo} alt="logo" />
      <ul>
        <li>
          <Link to="/resume">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li id="icon"  onClick={() => toggleTheme()}>
          <FontAwesomeIcon icon={faLightbulb} />
        </li>
      </ul>
    </NavStyles>
  );
}