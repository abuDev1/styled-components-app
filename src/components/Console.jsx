import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";
import { Line } from "./Line";

const ConsolesStyles = styled.textarea`
  width: 100%;
  margin: auto;
  height: 70vh;
  color: ${({ color }) => color || "white"};
  &:focus {
    outline: none;
  }
  border: none;
  resize: none;
`;

export const Console = (props) => {
  const [lines, setLines] = useState(["C/Users/ >"]);

  const onKeyPress = e => {
    if (e.charCode == 13) {
      setLines([...lines, "C/Users/ >"])
    }
  }

  return (
    <Flex direction="row">
      <Flex>
        {lines.map((line) => {
          return <Line>{line}</Line>;
        })}
      </Flex>
      <ConsolesStyles onKeyPress={onKeyPress} {...props} />;
    </Flex>
  );
};
