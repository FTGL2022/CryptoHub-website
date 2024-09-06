import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";
import home from "../assets/home.png";
import badgePercent from "../assets/badge-percent.png";
import Button from "./Button";

import { useTranslation } from "react-i18next";


export default function Home() {

  const { t } = useTranslation();


  return (
    <Section className="flex j-center a-center gap">
      <div className="content flex column gap-2">
        <div className="subtitle">
          <h3 className="flex a-center gap-1 blue">
            <span>
              <img src={badgePercent} alt="badgepercent" />
            </span>{" "}
            {t('investement')}
          </h3>
        </div>
        <div className="title">
        <h1>{t('openSentence')}</h1>


        </div>
        <div className="description">
          <p className="subdue">
          {t('secundaryText')}
          </p>
        </div>
        <div className="buttons flex gap-1">
          <Button text={t('buttons.tryNow')} icon={<FaChevronCircleRight />} />
          <Button text={t('buttons.howWorks')} subduedButton />
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