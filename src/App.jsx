import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";

const Button = styled.button`
  font-size: 1.2rem;
  padding: 1.2rem 1.2rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  cursor: pointer;
  margin: 20px;
  color: white;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading type="h1">The Wild Oasis</Heading>
        <Button>Check in</Button>
        <Input type="number" placeholder="Number of Guests" />
      </div>
    </>
  );
}

export default App;
