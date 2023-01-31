import React from "react";
import styled from "styled-components";
import { FcSimCardChip } from "react-icons/fc";
import mastercard from "../assets/mastercard.png";

function Card() {
  return (
    <Section>
      <div className="store">
        <div className="desing">
          <FcSimCardChip />
        </div>
        <div className="number">
          <h6>xxxx xxxx xxxx xxxx</h6>
        </div>
        <div className="image">
          <img src={mastercard} className="pic" />
        </div>
        <div className="name">
          <h6>TITULAR DE LA TARJETA</h6>
        </div>
        <div className="profile">
          <h6>Banco</h6>
          <span>Mastercard</span>
        </div>
      </div>
    </Section>
  );
}

export default Card;
const Section = styled.section`
  margin-top: 20px;
  .store {
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    border-radius: 1rem;
    color: black;
    background-color: #22202b;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: blue;
      color: black;
      svg {
        color: black;
      }
    }
    .desing {
      display: flex;
      svg {
        font-size: 2rem;
        color: white;
      }
    }
    .number {
      display: flex;
      gap: 0.5rem;
      margin-top: 10px;
      h6 {
        color: white;
        font-size: 1rem;
      }
    }
    .image {
      display: flex;
      height: 2.5rem;
      width: 2.5rem;
      margin-left: 12rem;
    }
    .name {
      display: flex;
      gap: 0.5rem;
    }
    h6 {
      color: grey;
      font-size: 0.6rem;
    }
  }
  .profile {
    display: flex;
    align-items: left;
    gap: 5rem;
    justify-content: space-evenly;
    margin-top: 10px;
    align-items: center;
    span,
    h6 {
      color: white;
    }
  }
`;
