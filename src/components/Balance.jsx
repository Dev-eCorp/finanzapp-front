import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
function Balance() {
  return (
    <Section>
      <div className="sales">
        <div className="sales__details">
          <div>
            <h4>Flujo de gastos e ingresos</h4>
          </div>
          <div>
            <h5>ÚLTIMOS 6 MESES</h5>
          </div>
        </div>
        <div className="sales__graph">
          <ResponsiveContainer width="100%" height="150%">
            <BarChart
              width={1100}
              height={500}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="gastos" stackId="a" fill="#DC143C" />
              <Bar dataKey="ingresos" stackId="b" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>
  );
}

export default Balance;
const data = [
  {
    name: "Julio",
    ingresos: 3490,
    gastos: 1300,
  },
  {
    name: "Agosto",
    ingresos: 3490,
    gastos: 4300,
  },
  {
    name: "Septiembre",
    ingresos: 3490,
    gastos: 4300,
  },
  {
    name: "Octubre",
    ingresos: 4490,
    gastos: 4300,
  },
  {
    name: "Noviembre",
    ingresos: 3490,
    gastos: 4300,
  },
  {
    name: "Diciembre",
    ingresos: 3490,
    gastos: 4300,
  },
];
const Section = styled.section`
  .sales {
    color: black;
    width: 100%;
    .sales__details {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      div {
        display: flex;
        gap: 1rem;
        h5 {
          color: gray;
        }
      }
    }
    .sales__graph {
      height: 10rem;
      width: 100%;
      .recharts-default-tooltip {
        background-color: black !important;
        border-color: black !important;
        color: white !important;
      }
    }
  }
`;
