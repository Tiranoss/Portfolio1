import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/util/ImageSection";
import ReviewsSetion from "../Components/util/ReviewsSetion";
import ServicesSection from "../Components/util/ServicesSection";
import Title from "../Components/util/Title";
import { MainLayout } from "../Styles/Layouts";

function AboutPage() {
  const AboutStyled = styled.div``;
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServicesSection />
        <ReviewsSetion />
      </AboutStyled>
    </MainLayout>
  );
}

export default AboutPage;
