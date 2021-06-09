import React from "react";
import styled from "styled-components";

function Footer() {
  const FooterStyled = styled.footer`
    border-top: 1px solid var(--border-color);
    // width: 100%;
    small {
      padding: 1rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  `;

  return (
    <FooterStyled>
      <small>&copy; Copyright , My Portfolio</small>
    </FooterStyled>
  );
}

export default Footer;
