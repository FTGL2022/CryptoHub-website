import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import Button from "./Button";
import { useTranslation } from "react-i18next";

export default function Newsletter() {

  const { t } = useTranslation();

  return (
    <Section className="flex j-between a-center gap">
      <div className="title-container flex column gap-1">
        <h2>{t('newsletter')}</h2>
        <h3 className="subdue">
          {t('newsletterP')}
        </h3>
      </div>
      <div className="newsletter flex j-center a-center gap-2">
        <div className="input-container flex j-center a-center gap-1">
          <AiOutlineMail />
          <input type="text" placeholder="Email " />
        </div>
        <Button text={t('buttons.subscribe')} />
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 0;
  margin-bottom: 8rem;
  background-color: var(--dark-background);
  padding: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap; 

  .title-container {
    flex: 1 1 300px; 
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .newsletter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex: 1 1 300px; 
  }

  .input-container {
    background-color: var(--input-background);
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input {
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    color: white;
    &:focus {
      outline: none;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 2rem;
    margin-bottom: 2rem;
    flex-direction: column; 
    gap: 2rem;

    .newsletter {
      flex-direction: column; 
      width: 100%; 
    }

    .input-container {
      flex-direction: row;
      width: 100%; 
      padding-right: 1rem;
    }

    input {
      flex: 1; 
    }
  }
`;
