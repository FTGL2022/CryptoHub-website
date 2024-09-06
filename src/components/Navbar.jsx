import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


export default function Navbar() {

  const { t, i18n } = useTranslation();

    const links = ["Home", "Dashboard", "Learn", "FAQ", "Contact", "About"];

  const [isNavOpen, setIsNavOpen] = useState(false);

  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));


  const handleChangeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };



  return (
    <Nav state={isNavOpen ? 1 : 0} className="flex j-between a-center">
      <div className="brand">
        <h2>CryptoHub</h2>
        <StyledButton onClick={()=>handleChangeLanguage('en')}>EN</StyledButton>
      <StyledButton onClick={()=>handleChangeLanguage('pt')}>PT</StyledButton>
      <StyledButton onClick={()=>handleChangeLanguage('es')}>ES</StyledButton>
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul className="flex gap-2">
          {links.map((link) => {
            return (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{t(`navbar_traduction.${link}`)}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="auth flex gap-1">
        <Button text={t('buttons.signIn')} subduedButton />
        <Button text={t('buttons.signUp')} />
      </div>
    </Nav>
  );
}


const StyledButton = styled.button`
  display: inline-block;
  padding: 8px 16px;
  font-size: 10px;
  font-weight: bold;
  color: white;
  background-color: #007bff; 
  border: none;
  border-radius: 15px; 
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3; 
    transform: scale(1.05);
  }

  &:active {
    background-color: #004494; 
  }
`;


const Nav = styled.nav`

  margin: 3rem 5rem;
  .brand {
    h2 {
      font-size: 2.5rem;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      font-weight: bolder;
      li {
        cursor: pointer;
        &:first-of-type {
          a {
            opacity: 1;
          }
        }
        a {
          opacity: 0.7;
          transition: 0.5s ease-in-out;
          &:hover {
            opacity: initial;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 3rem 1rem;
    margin: 0;
    position: relative;
    z-index: 5;
    flex-direction: row;
    .brand {
      h2 {
        font-size: 2rem;
      }
    }
    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 51;
      svg {
        color: #2d69fd;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      z-index: 10;
      position: fixed;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: white;
      opacity: 0;
      visibility: hidden;
      transition: 0.7s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: #2d69fd;
          }
        }
      }
    }
    .auth {
      display: none;
    }
  }
`;