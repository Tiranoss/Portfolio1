import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import AboutPage from "../../Pages/AboutPage";
import BlogsPage from "../../Pages/BlogsPage";
import ContactPage from "../../Pages/ContactPage";
import PortfolioPage from "../../Pages/PortfolioPage";
import ResumePage from "../../Pages/ResumePage";

function Main() {
  const MainPageStyled = styled.main`
    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;

    .lines {
      position: absolute;
      min-height: 100vh;
      width: 100%;
      display: flex;
      // justify-content: space-evenly;
      .line-1,
      .line-2,
      .line-3,
      .line-4 {
        width: 1px;
        min-height: 100vh;
        background-color: var(--border-color);
      }
    }
  `;
  return (
    <MainPageStyled>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/Portfolio" exact>
            <PortfolioPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </MainPageStyled>
  );
}

export default Main;
