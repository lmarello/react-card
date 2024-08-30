import { useState } from "react";
import "./App.css";
import { Card } from "./components";

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
    <div className="container">
      <div className="form-container">
        <div className="input-group">
          <label htmlFor="number">Number</label>
          <input name="number" type="text" onChange={handleNumberChange} />
        </div>
        <div className="input-group">
          <label htmlFor="holder">Holder</label>
          <input name="holder" type="text" onChange={handleNameChange} />
        </div>
        <div className="input-group">
          <label htmlFor="expiration">Expires end</label>
          <input name="expiration" type="text" onChange={handleNameChange} />
        </div>
        <div className="input-group">
          <label htmlFor="cvv">CVV</label>
          <input
            name="cvv"
            type="text"
            onChange={handleNameChange}
            onFocus={() => setCvvFocused(true)}
            onBlur={() => setCvvFocused(false)}
          />
        </div>
      </div>
      <Card number={number} name={name} cvvFocused={cvvFocused} />
    </div>
  );
}

export default App;
