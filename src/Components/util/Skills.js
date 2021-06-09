import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layouts";
import Title from "../util/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  const SkillsStyled = styled.section`
    .skills {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 2rem;
      grid-column-gap: 3rem;
      @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `;

  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"70%"} text={"70%"} />
          <ProgressBar title={"CSS3"} width={"70%"} text={"70%"} />
          <ProgressBar title={"JAVASCRIPT"} width={"60%"} text={"60%"} />
          {/* <ProgressBar title={"JAVA"} width={"0%"} text={"0%"} /> */}
          <ProgressBar title={"PYTHON"} width={"60%"} text={"60%"} />
          <ProgressBar title={"React JS"} width={"65%"} text={"65%"} />
          <ProgressBar title={"Node JS"} width={"60%"} text={"60%"} />
          {/* <ProgressBar title={"UNITY"} width={"0%"} text={"0%"} /> */}
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

export default Skills;
