import React from "react";
import styled from "styled-components";
import {
  RiGoogleFill,
  RiAppleFill,
  RiAmazonFill,
  RiBitCoinFill,
} from "react-icons/ri";
import { useTranslation } from "react-i18next";





export default function Roadmap() {

  const { t } = useTranslation();

  const data = [
    {
      datekey: "date1",
      namekey: "name1",
      descriptionkey:
        "descriptionOne",
      icon: <RiGoogleFill />,
    },
    {
      datekey: "date2",
      namekey: "name2",
      descriptionkey:
        "descriptionTwo",
      icon: <RiAppleFill />,
    },
    {
      datekey: "date3",
      namekey: "name3",
      descriptionkey:
        "descriptionThree",
      icon: <RiAmazonFill />,
    },
    {
      datekey: "date4",
      namekey: "name4",
      descriptionkey:
        "descriptionFour",
      icon: <RiBitCoinFill />,
    },
    {
      datekey: "date5",
      namekey: "name5",
      descriptionkey:
        "descriptionFive",
      icon: <RiGoogleFill />,
    },
    {
      datekey: "date6",
      namekey: "name6",
      descriptionkey:
        "descriptionSix",
      icon: <RiAppleFill />,
    },
    {
      datekey: "date7",
      namekey: "name7",
      descriptionkey:
        "descriptionSeven",
      icon: <RiAmazonFill />,
    },
    {
      datekey: "date8",
      namekey: "name8",
      descriptionkey:
        "descriptionEight",
      icon: <RiBitCoinFill />,
    },
  ];
  return (
    <Section className="flex column gap">
      <div className="title-container text-center">
        <div className="subtitle subdue">
          <h3>{t('roadmap')}</h3>
        </div>
        <div className="title">
          <h2>{t('investingFuture')}</h2>
        </div>
      </div>
      <div className="roadmap flex gap">
        {data.map(({ datekey, namekey, descriptionkey, icon }, index) => {
          return (
            <div className="map flex column gap-1 a-start" key={index}>
              <div className="icon flex j-center a-center">{icon}</div>
              <h3 className="date">{t(datekey)}</h3>
              <h3 className="name">{t(namekey)}</h3>
              <p className="description subdue">{t(descriptionkey)}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section` 
  .roadmap {
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 4rem;
    &::-webkit-scrollbar {
      height: 1px;
    }
    .map {
      min-width: 300px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 1.3rem;
        left: 1rem;
        height: 100%;
        width: 120%;
        z-index: -1;
        border-top: 3px solid white;
        opacity: 0.5;
      }
      .icon {
        background-color: var(--roadmap-icon);
        padding: 0.5rem;
        border-radius: 100%;

        svg {
          font-size: 2rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 2rem;

    .roadmap {
      overflow: initial;
      padding-bottom: 2rem;
      .map {
        min-width: 100%;
      }
      .map::after {
        border-top: none;
      }
    }
  }
`;