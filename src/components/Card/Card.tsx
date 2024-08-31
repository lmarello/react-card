import { useEffect, useState } from "react";
import {
  CreditCardContainer,
  CreditCard,
  CardFront,
  CardBack,
  Chip,
  CardNumber,
  CardDetails,
  CardHolder,
  CardExpiry,
  Stripe,
  Cvv,
  CvvLabel,
  CvvNumber,
  Issuer,
  TextShadow,
} from "./Card.styles";
import Visa from "../../assets/visa.png";

interface Props {
  number?: string;
  name?: string;
  cvvFocused: boolean;
  placeholders?: {
    name: string;
  };
}

const placeholders = {
  number: "****************",
  name: "john doe",
  cvv: "1225",
};

export const Card = ({ cvvFocused, name, number }: Props) => {
  const [numberFormatted, setNumberFormatted] = useState(placeholders.number);

  useEffect(() => {
    const numberToUse = number || placeholders.number;
    const paddedNumber = numberToUse.padEnd(16, "*");
    if (paddedNumber.length <= 16) {
      setNumberFormatted(paddedNumber.replace(/(.{4})(?=.{4})/g, "$1 "));
    }
  }, [number]);

  return (
    <CreditCardContainer>
      <CreditCard style={cvvFocused ? { transform: "rotateY(180deg)" } : {}}>
        <CardFront>
          <Issuer src={Visa} alt="visa" />
          <Chip>
            <div className="chipLine"></div>
            <div className="chipLine"></div>
            <div className="chipLine"></div>
            <div className="chipLine"></div>
            <div className="chipMain"></div>
          </Chip>
          <CardNumber as={TextShadow}>{numberFormatted}</CardNumber>
          <CardDetails as={TextShadow}>
            <CardExpiry>
              EXP
              <span>12/25</span>
            </CardExpiry>
            <CardHolder>{name || placeholders.name}</CardHolder>
          </CardDetails>
        </CardFront>
        <CardBack>
          <Stripe />
          <Cvv>
            <CvvLabel as={TextShadow}>CVV</CvvLabel>
            <CvvNumber>123</CvvNumber>
          </Cvv>
        </CardBack>
      </CreditCard>
    </CreditCardContainer>
  );
};
