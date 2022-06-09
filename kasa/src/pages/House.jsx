import React from "react";
import { useParams } from "react-router-dom";
import { UseFetch } from "../utils/fetch";
import Carousel from "../components/carousel";
import Error404 from "../pages/Error404";
import styled from "styled-components";

const House = () => {
  const urlParams = useParams();

  const { data } = UseFetch("/data.json");

  const houseData = data.filter((data) => data.id === urlParams.id);

  if (houseData[0] !== undefined) {
    return (
      <MainStyle className="main main-House">
        {houseData.map((location, index) => (
          <section className="container" key={index}>
            <Carousel key="carousel" />
          
          </section>
        ))}
      </MainStyle>
    );
  } else {
    if (data.length === 0) {
      return <main className="loading">Loading...</main>;
    } else {
      return (
        <main>
          <Error404 />
        </main>
      );
    }
  }
};

const MainStyle = styled.main`
  margin-bottom: 100px;
`;

export default House;
