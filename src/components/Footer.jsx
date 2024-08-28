import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import spacemen from "../assets/spacemen.png";
import cards from "../assets/cards.png";

export default function Footer() {
  const companyLinks = [
    "About",
    "Careers",
    "Affiliates",
    "Blog",
    "Press",
    "Investors",
    "Legal & Privacy",
    "Cookie policy",
    "Cookie preferences",
  ];
  const learnLinks = [
    "Browse crypto prices",
    "Coinbase Bytes newsletter",
    "Crypto basics",
    "Tips & Tutorials",
    "Market Updates",
    "What is Bitcoin?",
    "What is crypto?",
    "What is a blockchain?",
    "How to set up a crypto wallet",
    "How to send crypto",
  ];
  const socialIcons = [<BsFacebook />, <BsTwitter />, <BsYoutube />];

  return (
    <Foot>
      <div className="upper-footer">
        <div className="col flex column gap-1">
          <div className="brand">
            <h2>CryptoHub</h2>
          </div>
          <div className="address">
            <p>Test, 123 East 456th Street, 0th Floor, New York, NY 123456</p>
          </div>
          <div className="info">
            <span>T : +1-202-555-0184</span>
            <span>E : hello@cryptoz.com</span>
          </div>
          <div className="social-icons flex gap-2">
            {socialIcons.map((icon, index) => (
              <div className="icon" key={index}>
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className="col flex column gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col flex column gap-1">
          <div className="title">
            <h3>Learn</h3>
          </div>
          <ul className="flex column gap-half">
            {learnLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col flex column gap-1">
          <div className="title">
            <h3>Additional Links</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col spacemen">
          <div className="image">
            <img src={spacemen} alt="spacemen" />
          </div>
        </div>
      </div>
      <div className="lower-footer flex a-center j-between gap">
        <div className="col1">
          <span>&copy; FL</span>
        </div>
        <div className="col2 flex a-center gap">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span className="cards">
            <img src={cards} alt="cards" />
          </span>
        </div>
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  padding: 0rem 5rem;
  padding-bottom: 3rem;
  position: relative;
  background-color: var(--dark-background);
  color: white;

  .upper-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    .social-icons {
      margin-top: 2rem;
      svg {
        font-size: 2rem;
      }
    }

    .spacemen {
      position: absolute;
      right: 0rem;
      top: -23rem;
    }
  }

  .lower-footer {
    margin-top: 2rem;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem 2rem;
    margin-bottom: 2rem;

    .upper-footer {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      position: relative;

      .spacemen {
        display: none;
      }

      .social-icons {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }

    .lower-footer {
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .col2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        .cards img {
          width: 80%;
        }
      }
    }
  }
`;
