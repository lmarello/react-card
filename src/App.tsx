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
  const [cvv, setCvv] = useState<string | undefined>(undefined);
  const [expiration, setExpiration] = useState<string | undefined>(undefined);
  const [inputFocused, setInputFocused] = useState<
    "number" | "name" | "expiration" | "cvv" | null
  >(null);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, "");
    setNumber(numbers);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleExpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, "");

    if (numbers.length <= 2) {
      return numbers;
    }

    setExpiration(`${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value);
  };

  return (
    <Container>
      <Card
        number={number}
        name={name}
        inputFocused={inputFocused}
        cvv={cvv}
        expiration={expiration}
      />
      <FormContainer>
        <InputContainer>
          <label>Number</label>
          <input
            type="text"
            onChange={handleNumberChange}
            onFocus={() => setInputFocused("number")}
            onBlur={() => setInputFocused(null)}
            maxLength={16}
            value={number}
          />
        </InputContainer>
        <InputContainer>
          <label>Expires end</label>
          <input
            type="text"
            onChange={handleExpChange}
            onFocus={() => setInputFocused("expiration")}
            onBlur={() => setInputFocused(null)}
            maxLength={4}
          />
        </InputContainer>
        <InputContainer>
          <label>Holder</label>
          <input
            type="text"
            onChange={handleNameChange}
            onFocus={() => setInputFocused("name")}
            onBlur={() => setInputFocused(null)}
            maxLength={28}
          />
        </InputContainer>
        <InputContainer>
          <label>CVV</label>
          <input
            type="text"
            onChange={handleCvvChange}
            onFocus={() => setInputFocused("cvv")}
            onBlur={() => setInputFocused(null)}
            maxLength={4}
          />
        </InputContainer>
      </FormContainer>
    </Container>
  );
}

export default App;
