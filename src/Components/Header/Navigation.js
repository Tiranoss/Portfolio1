import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../../img/img-profile.jpg";
import Footer from "./Footer";

function Navigation() {
  const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-right: 1px solid var(--border-color);
    .avatar {
      width: 100%;
      text-align: center;
      // padding: 2rem 0;
      border-bottom: 1px solid var(--border-color);
      img {
        width: 80%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
      }
    }
    .nav-items {
      width: 100%;
      text-align: center;
      .active-class {
        background-color: var(--primary-color);
      }
      li {
        display: block;
        a {
          display: block;
          padding: 0.5rem 0;
          position: relative;
          z-index: 10;
          // letter-spacing: 1rem;
          &:hover {
            cursor: pointer;
          }
          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 50%;
            background-color: var(--primary-color);
            transition: All 0.4s cubic-bezier(1, -0.2, 0.27, 0.95);
            z-index: 3;
            opacity: 0.21;
            transform-origin: right;
          }
        }
        a:hover::before {
          width: 100%;
          height: 100%;
        }
      }
    }
  `;
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" activeClassName="active-class" exact>
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="active-class" exact>
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </li>
      </ul>
      <Footer />
    </NavigationStyled>
  );
}

export default Navigation;
