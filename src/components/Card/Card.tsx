import { useEffect, useState } from "react";
import {
  CardBack,
  CardDetails,
  CardExpiry,
  CardFront,
  CardHolder,
  CardNumber,
  Chip,
  CreditCard,
  CreditCardContainer,
  Cvv,
  CvvLabel,
  CvvNumber,
  Issuer,
  Rfid,
  Stripe,
  TextShadow,
} from "./Card.styles";
import { getIssuer } from "../../utils";

interface Props {
  number?: string;
  name?: string;
  cvv?: string;
  expiration?: string;
  inputFocused: "number" | "name" | "expiration" | "cvv" | null;
  placeholders?: {
    name: string;
  };
}

const placeholders = {
  number: "1234567890123456",
  name: "Peter Parker",
  expiration: "12/25",
  cvv: "111",
};

export const Card = ({
  cvv,
  inputFocused,
  expiration,
  name,
  number,
}: Props) => {
  const [numberFormatted, setNumberFormatted] = useState(placeholders.number);

  useEffect(() => {
    const numberToUse = number || placeholders.number;
    const paddedNumber = numberToUse.padEnd(16, "*");
    if (paddedNumber.length <= 16) {
      setNumberFormatted(paddedNumber.replace(/(.{4})(?=.{4})/g, "$1 "));
    }
  }, [number]);

  const issuer = getIssuer(number || "");

  return (
    <CreditCardContainer>
      <CreditCard
        style={inputFocused === "cvv" ? { transform: "rotateY(180deg)" } : {}}
      >
        <CardFront>
          <Issuer issuer={issuer} />
          <Chip>
            <div className="chipLine"></div>
            <div className="chipLine"></div>
            <div className="chipLine"></div>
            <div className="chipLine"></div>
            <div className="chipMain"></div>
          </Chip>
          <Rfid>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </Rfid>
          <CardNumber
            as={TextShadow}
            className={inputFocused === "number" ? "focus" : ""}
          >
            {numberFormatted}
          </CardNumber>
          <CardDetails as={TextShadow}>
            <CardExpiry
              as={TextShadow}
              className={inputFocused === "expiration" ? "focus" : ""}
            >
              EXP
              <span>{expiration || placeholders.expiration}</span>
            </CardExpiry>
            <CardHolder
              as={TextShadow}
              className={inputFocused === "name" ? "focus" : ""}
            >
              {name || placeholders.name}
            </CardHolder>
          </CardDetails>
        </CardFront>
        <CardBack>
          <Stripe />
          <Cvv>
            <CvvLabel as={TextShadow}>CVV</CvvLabel>
            <CvvNumber>{cvv || placeholders.cvv}</CvvNumber>
          </Cvv>
        </CardBack>
      </CreditCard>
    </CreditCardContainer>
  );
};
