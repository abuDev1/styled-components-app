import styled from "styled-components";
import { Title } from "./Title";
import { Console } from "./Console";
import { Button } from "./Button";
import { Flex } from "./Flex";


const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 30px auto;
`;

function App() {
  return (
    <AppContainer>
      <Title>Console cmd 2024</Title>
      <Flex>
        <Console color="red" />
        <Button myButton>Send</Button>
      </Flex>
    </AppContainer>
  );
}

export default App;
