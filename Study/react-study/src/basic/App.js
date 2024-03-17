import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: red;
`;

export default function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <Container>
        <Button>new button</Button>
      </Container>
    </>
  );
}
