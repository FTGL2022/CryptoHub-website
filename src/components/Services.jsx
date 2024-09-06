import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import { useTranslation } from "react-i18next";

export default function Services() {

  const { t } = useTranslation();


  const servicesData = [
    {
      image: service1,
      titlekey: "title1",
      descrptionkey:
        "description1",
    },
    {
      image: service2,
      titlekey: "title2",
      descrptionkey:
        "description2",
    },
    {
      image: service3,
      titlekey: "title3",
      descrptionkey:
        "description3",
    },
  ];
  return (
    <Section className="flex column j-center a-center gap">
      <div className="title-container flex column gap-1">
        <div className="title text-center ">
          <h2>{t('tradingPart')}</h2>
        </div>
        <div className="subtitle text-center subdue">
          <h3>
            {t("tradingPart2")}
          </h3>
        </div>
      </div>
      <div className="services flex j-center a-center gap">
        {servicesData.map(({ image, titlekey, descrptionkey }) => {
          return (
            <div className="service text-center flex column gap-1" key={titlekey}>
              <div className="image">
                <img src={image} alt="servive" />
              </div>
              <h3 className="title">{t(titlekey)}</h3>
              <p className="description subdue">{t(descrptionkey)}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  .services {
    padding: 0 5rem;
    gap: 10rem;
    .service {
      .title {
        font-size: 1.5rem;
      }
      .description {
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      padding: 2rem;
      gap: 3rem;
    }
  }
`;