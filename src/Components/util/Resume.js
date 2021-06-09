import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layouts";
import Title from "../util/Title";
import SmallTitle from "../util/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../util/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  const ResumeStyled = styled.section`
    .small-title {
      padding-bottom: 3rem;
    }
    .u-small-title-margin {
      margin-top: 4rem;
    }

    .resume-content {
      border-left: 2px solid var(--border-color);
    }
  `;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"April 2013 to July 2013"}
            title={"Mechanical worker intership"}
            subTitle={"Tunisian National Railways(S.N.C.F.T)"}
            text={
              "Dynamic good experience of the occasional Electro-Mechanical profession"
            }
          />
          <ResumeItem
            year={"September 2014 to August 2018"}
            title={"Business Manager"}
            subTitle={"Anwar El Ons a wholesale company"}
            text={"Manager in the Sale of electrical equipement and energy"}
          />
          <ResumeItem
            year={"February 2019 to August 2019"}
            title={"Client Advisor"}
            subTitle={"TELEPERFORMANCE Center Call"}
            text={
              "Worked as a call reception agent in the Bouygues Telecom platform where i was able to perfect my French"
            }
          />
          <ResumeItem
            year={"September 2020 to March 2021"}
            title={"MERN STACK TRAINING"}
            subTitle={"GOMYCODE"}
            text={
              "An apprenticeship to succeed in carrying out a Mern project "
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"October 2011 to February 2014"}
            title={"Professional Technician Certificate in Electro-Mechanics"}
            subTitle={"Bach Hamba Training Center"}
            text={""}
          />
          <ResumeItem
            year={"September 2020 to December 2020"}
            title={"FULLSTACK JAVASCRIPT"}
            subTitle={"GOMYCODE"}
            text={""}
          />
          <ResumeItem
            year={"December 2020 to MARCH 2021"}
            title={"CODING WITH PYTHON"}
            subTitle={"GOMYCODE"}
            text={""}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

export default Resume;
