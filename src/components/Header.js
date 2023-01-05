import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Headerbox>
      <h1>My Todo List</h1>
      <h1> React</h1>
    </Headerbox>
  );
};

export default Header;

const Headerbox = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;
