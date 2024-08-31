import { useState } from "react";
import "./App.css";
import { Card } from "./components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  margin-top: 20px;
  width: 340px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  transition: opacity 0.3s ease-in-out;

  input {
    margin-top: 10px;
    padding: 10px;
    width: 100%;
  }
`;

function App() {
  const [number, setNumber] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [cvvFocused, setCvvFocused] = useState(false);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Container>
      <Card number={number} name={name} cvvFocused={cvvFocused} />
      <FormContainer>
        <InputContainer>
          <label>Number</label>
          <input type="text" onChange={handleNumberChange} />
        </InputContainer>
        <InputContainer>
          <label>Expires end</label>
          <input type="text" onChange={() => {}} />
        </InputContainer>
        <InputContainer>
          <label>Holder</label>
          <input type="text" onChange={handleNameChange} />
        </InputContainer>
        <InputContainer>
          <label>CVV</label>
          <input
            type="text"
            onChange={handleNameChange}
            onFocus={() => setCvvFocused(true)}
            onBlur={() => setCvvFocused(false)}
          />
        </InputContainer>
      </FormContainer>
    </Container>
  );
}

export default App;
