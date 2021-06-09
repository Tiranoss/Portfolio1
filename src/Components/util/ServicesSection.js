import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layouts";
import Title from "../util/Title";
import ServiceCard from "../util/ServiceCard";
import design from "../../img/design.svg";
import intelligence from "../../img/intelligence.svg";
import gamedev from "../../img/game-dev.svg";

function ServicesSection() {
  const ServicesSectionStyled = styled.section`
    .services {
      margin-top: 5rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem;
      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
      @media screen and (max-width: 950px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `;

  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Design"}
            paragraph={"Coming soon."}
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Artificial Intelligence"}
              paragraph={"Coming soon..."}
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={"Game Development"}
            paragraph={"Coming soon."}
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}
export default ServicesSection;
