import React from "react";
import styled from "styled-components";

import Author, { authors } from "../src";

const style = {
  padding: "20px"
};

export const Item = styled.div`
  margin-bottom: 15px;
`;

export default () => (
  <div style={style}>
    {Object.keys(authors).map(a => (
      <Item key={a}>
        <Author email={a} />
      </Item>
    ))}
  </div>
);
