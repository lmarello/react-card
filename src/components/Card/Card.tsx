import { useEffect, useState } from "react";
import styles from "./Card.module.css";

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
    <div className={styles.creditCardContainer}>
      <div
        className={`${styles.creditCard} ${
          cvvFocused ? styles.creditCardFlip : ""
        } `}
      >
        <div className={styles.cardFront}>
          <div className={styles.chip}>
            <div className={styles.chipLine}></div>
            <div className={styles.chipLine}></div>
            <div className={styles.chipLine}></div>
            <div className={styles.chipLine}></div>
            <div className={styles.chipMain}></div>
          </div>
          <div className={`${styles.cardNumber} ${styles.textShadow}`}>
            {numberFormatted}
          </div>
          <div className={`${styles.cardDetails} ${styles.textShadow}`}>
            <div className={styles.cardExpiry}>
              EXP. END:
              <span>12/25</span>
            </div>
            <div className={styles.cardHolder}>{name || placeholders.name}</div>
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.stripe}></div>
          <div className={styles.cvv}>
            <div className={`${styles.cvvLabel} ${styles.textShadow}`}>CVV</div>
            <div className={`${styles.cvvNumber}`}>123</div>
          </div>
        </div>
      </div>
    </div>
  );
};
