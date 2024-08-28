import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";
import about from "../assets/about.png";
import Button from "./Button";

export default function AboutUs() {
  return (
    <Section className="flex a-center gap">
      <div className="content flex column gap">
        <div className="title-container flex column j-center a-center gap-1">
          <div className="subtitle subdue">
            <h3>About Us</h3>
          </div>
          <div className="title">
            <h2>Why would You Choose Market Watchmen?</h2>
          </div>
        </div>
        <div className="info-section flex gap">
          <div className="info flex column gap a-start j-center">
            <p className="subdue">Easy To Learn Platform –</p>
            <p className="subdue">
            No need to link your bank accounts.
            Our goal is to help everyone understand the potential of saving and investing, 
            whether for retirement or short-term goals. 
            We focus on data analytics to make investment insights clearer and more accessible.
            </p>
            <Button text="Start Earning" icon={<FaChevronCircleRight />} />
          </div>
          <div className="image">
            <img src={about} alt="about" className="half-width" />
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap; 

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1 1 600px; 
  }

  .title-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info-section {
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap; 
  }

  .info {
    flex: 1 1 300px; 
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
    padding: 1rem;

    .info-section {
      flex-direction: column; 
      align-items: center;
    }

    .image {
      width: 100%; 
    }

    .info {
      width: 100%; 
    }
  }
`;
