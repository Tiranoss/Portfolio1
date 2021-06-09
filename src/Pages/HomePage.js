import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function HomePage() {
  const HomePage = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 80%;
      h1 {
        font-size: 2.5rem;
        span {
          font-size: 3rem;
          color: var(--primary-color);
        }
      }
      p {
        align-text: center;
      }
      .icons {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon {
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.4s ease-in-out;
          cursor: pointer;
          &:hover {
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
          }
          &:not(:last-child) {
            margin-right: 1rem;
          }
          svg {
            margin: 0.5rem;
          }
        }
        .i-linkedin {
          &:hover {
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
          }
        }
        .i-github {
          &:hover {
            border: 2px solid #5f4687;
            color: #5f4687;
          }
        }
      }
    }
  `;
  return (
    <HomePage>
      <div className="p-particles-js">
        <Particles />
      </div>
      <div className="typography">
        <h1>
          Hi I'm <span>BILEL KANOUN</span>
        </h1>
        <p>I am a Junior Full Stack JS Web Developer</p>
        <div className="icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/bilel.kanoun.7/"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Tiranoss?tab=repositories"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/kanoun-bilel-77106581/"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePage>
  );
}

export default HomePage;
