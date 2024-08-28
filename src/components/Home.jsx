import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";
import home from "../assets/home.png";
import badgePercent from "../assets/badge-percent.png";
import Button from "./Button";

export default function Home() {
  return (
    <Section className="flex j-center a-center gap">
      <div className="content flex column gap-2">
        <div className="subtitle">
          <h3 className="flex a-center gap-1 blue">
            <span>
              <img src={badgePercent} alt="badgepercent" />
            </span>{" "}
            Investment made easy
          </h3>
        </div>
        <div className="title">
          <h1>Your Simplified Solution for Tracking Diverse Currencies</h1>
        </div>
        <div className="description">
          <p className="subdue">
          Market Watchman provides a comprehensive solution to track your balances, 
          trade without restrictions, and earn rewards for selected cryptocurrencies.
          </p>
        </div>
        <div className="buttons flex gap-1">
          <Button text="Try Now" icon={<FaChevronCircleRight />} />
          <Button text="How it works?" subduedButton />
        </div>
      </div>
      <div className="image">
        <img src={home} alt="home" className="half-width" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap; 

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1 1 400px; 
  }

  .subtitle h3 {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    margin: 2rem 0;
    gap: 1rem;
  }

  .image {
    display: flex; 
    justify-content: center;
    align-items: center;
    flex: 1 1 300px; 
  }

  .image img {
    max-width: 100%; 
    height: auto; 
    object-fit: cover; 
    max-height: 500px; 
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column; 
    align-items: center; 

    .content {
      width: 100%; 
      gap: 1.5rem;
    }

    .subtitle h3 {
      flex-direction: row;
      gap: 0.5rem;
    }

    .buttons {
      flex-direction: column; 
      margin: 1rem 0;
      gap: 1rem;
    }

    .image img {
      width: 100%; 
      max-height: none; 
    }
  }
`;
