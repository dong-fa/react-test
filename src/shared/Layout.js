// src/shared/Layout.js

import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <div style={{ ...HeaderStyles }}>
      <span>Sparta Coding Club - Let's learn React</span>
    </div>
  );
}

function Footer() {
  return (
    <div style={{ ...FooterStyles }}>
      <span>copyright @SCC</span>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Layoutbox>{children}</Layoutbox>
      <Footer />
    </div>
  );
}

export default Layout;

const HeaderStyles = {
  width: "100%",
  background: "black",
  height: "50px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
  color: "white",
  fontWeight: "600",
};
const FooterStyles = {
  width: "100%",
  height: "50px",
  display: "flex",
  background: "black",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
};

const Layoutbox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
