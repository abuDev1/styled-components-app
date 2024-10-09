import React from "react";
import styled from "styled-components";

const LineStyles = styled.div`
  color: green;
  width: 100px;
`;

export const Line = (props) => {
  return <LineStyles {...props} />;
};
