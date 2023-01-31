import React from "react";
import styled from "styled-components";
import apple from "../assets/avatar.png";

function History() {
  return (
    <Section>
      <div className="orders">
        <div className="orders__details">
          <div>
            <h4>Historial</h4>
          </div>
          <div>
            <h6>Transacciones de los últimos meses</h6>
          </div>
        </div>
        <div className="orders__table">
          <table>
            <tr>
              <td>
                <img src={apple} alt="" />
              </td>
              <td>Seguro de coche</td>
              <td>14:10:32 AM</td>
              <td>$350.000</td>
              <td>Completado</td>
            </tr>
          </table>
        </div>
      </div>
    </Section>
  );
}

export default History;
const Section = styled.section`
  .orders {
    margin-top: 4rem;
    color: black;
    width: 100%;
    .orders__details {
      display: flex;
      justify-content: space-between;
      margin: 1rem 1rem;

      div {
        display: flex;
        gap: 1rem;
        color: grey;
      }
    }
    .orders__table {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      color: grey;
      table {
        border-collapse: collapse;
        width: 100%;
        td {
          text-align: center;
          padding: 5px;
          justify-content: space-evenly;

          img {
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 3rem;
          }
        }
      }
    }
  }
`;
