import React from 'react'
import styled from 'styled-components'
import { FcSimCardChip } from "react-icons/fc";
import mastercard from "../assets/mastercard.png"

function Card() {
  return (
    <Section>
      <div className='tienda'>
        <div className='desing'>
          <FcSimCardChip/>
        </div>
        <div className='numero'>
          <h6>4562 1122 4595 7852</h6>
        </div>
        <div className='imagen'>
         <img src={mastercard} className="pic" />
        </div>
        <div className='nombre'>
          <h6>TITULAR DE LA TARGETA</h6>
        </div>
        <div className='profile'>
          <h6>AAE IdeaPro</h6>
          <span>Mastercard</span>
        </div>

      </div>

    </Section>
  )
}

export default Card
const Section = styled.section`
.tienda{
  padding: 0.8rem 0.8rem 0.8rem 0.8rem;
  border-radius: 1rem;
  color: black;
  background-color: #22202B;
  align-items: center;
  gap: 0.5rem;
  transition: 0.5s ease-in-out;
  &:hover{
    background-color: blue;
    color: black;
    svg{
      color: black;
    }
  }
  .desing{
    display: flex;
    svg{
      font-size: 2rem;
      color: white;
    }
  }
  .numero{
    display: flex;
    gap: 0.5rem;
    margin-top: 10px;
    h6{
      color: white;
      font-size: 1rem;
    }
  }
  .imagen{
    display: flex;
    height: 2.5rem;
    width: 2.5rem;
    margin-left: 12rem;
  }
  .nombre{
    display: flex;
    gap: 0.5rem;
  }
  h6{
    color: grey;
    font-size: 0.6rem;
  }
}
.profile{
  display: flex;
  align-items: left;
  gap: 5rem;
  justify-content: space-evenly;
  margin-top: 10px;
  align-items: center;
  span, h6{
    color: white;
  }
  
}

`;
  