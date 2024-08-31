import styled from "styled-components";

// 2e3e82 blue
// 2d2d2d - black

export const CreditCardContainer = styled.div`
  perspective: 1500px;
  margin: 0 auto;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-family: "cc font", monospace;
  text-transform: uppercase;
`;

export const TextShadow = styled.div`
  color: #aaa;
  background: linear-gradient(135deg, #e0e0e0 0%, #b3b3b3 50%, #e0e0e0 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1),
    -1px -1px 2px rgba(255, 255, 255, 0.2);

  /* &.focus {
    color: #fff;
    background: linear-gradient(135deg, #e0e0e0 0%, #b3b3b3 50%, #e0e0e0 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5),
      -1px -1px 2px rgba(255, 255, 255, 0.2);
  } */
`;

export const CreditCard = styled.div`
  width: 340px;
  height: 220px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
  transform-origin: center;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 10px;
`;

export const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-size: 18px;
  border-radius: 10px;
`;

export const CardFront = styled(CardSide)`
  background-color: #2d2d2d;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    pointer-events: none;
    opacity: 0.5;
    border-radius: 10px;
  }
`;

export const CardBack = styled(CardSide)`
  background-color: #2e2e2e;
  color: white;
  transform: rotateY(180deg);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(156, 156, 156, 0.257) 70%
    );
    pointer-events: none;
    opacity: 0.5;
    border-radius: 10px;
  }
`;

export const Chip = styled.div`
  position: relative;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 30px;
  border-radius: 5px;
  background-image: linear-gradient(to bottom left, #ffecc7, #d0b978);
  overflow: hidden;

  .chipLine {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #333;
  }

  .chipLine:nth-child(1) {
    top: 10px;
  }

  .chipLine:nth-child(2) {
    top: 15px;
  }

  .chipLine:nth-child(3) {
    top: 20px;
  }

  .chipLine:nth-child(4) {
    left: 19px;
    width: 1px;
    height: 40px;
  }

  .chipMain {
    width: 10px;
    height: 15px;
    border: 1px solid #333;
    border-radius: 3px;
    background-image: linear-gradient(to bottom left, #efdbab, #e1cb94);
    z-index: 1;
  }
`;

export const Rfid = styled.div`
  position: relative;
  top: -20px;
  left: 25px;
  width: 50px;
  height: 50px;
  rotate: 90deg;

  .wave {
    position: absolute;
    border-radius: 50%;
    border: 2px solid #e8e8e8;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }

  .wave:nth-child(1) {
    width: 8px;
    height: 8px;
    top: 21px;
    left: 21px;
  }

  .wave:nth-child(2) {
    width: 20px;
    height: 20px;
    top: 15px;
    left: 15px;
  }

  .wave:nth-child(3) {
    width: 36px;
    height: 36px;
    top: 7px;
    left: 7px;
  }
`;

export const CardNumber = styled.div`
  position: relative;
  text-align: left;
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;
`;

export const CardHolder = styled.div`
  font-size: 14px;
`;

export const CardExpiry = styled.div`
  font-size: 8px;

  span {
    padding-left: 4px;
    padding-bottom: 4px;
    font-size: 12px;
  }
`;

export const Stripe = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 340px;
  height: 45px;
  background: linear-gradient(-110deg, #0c0b0b 70%, #363636 100%);
  top: 30px;
`;

export const Cvv = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 300px;
  height: 30px;
  background: linear-gradient(-110deg, #ffffff 70%, #e9e9e9 100%);
  top: 110px;
  border-radius: 3px;
`;

export const CvvLabel = styled.div`
  font-size: 12px;
  position: absolute;
  top: -20px;
  right: 10px;
`;

export const CvvNumber = styled.div`
  font-size: 16px;
  position: absolute;
  color: #000000;
  top: 5px;
  right: 10px;
  background: linear-gradient(135deg, #5c5c5c 0%, #444343 50%, #444343 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2),
    -1px -1px 2px rgba(255, 255, 255, 0.3);
`;

const issuerPositions = {
  mastercard: "0 0px",
  visa: "-70px 0",
};

export const Issuer = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 69px;
  height: 40px;
  background-image: url("./public/issuers.png");
  background-position: ${(props) => issuerPositions[props.issuer] || "70px 0"};
  background-size: cover;
  background-repeat: no-repeat;
`;
