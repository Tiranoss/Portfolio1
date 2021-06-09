import React from "react";
import Skills from "../Components/util/Skills";
import { MainLayout } from "../Styles/Layouts";
import Resume from "../Components/util/Resume";

function ResumePage() {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  );
}

export default ResumePage;
