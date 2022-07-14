import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/carousel";
import Error404 from "../pages/Error404";
import styled from "styled-components";
import data from "../data/data.json"
import DescriptionLogement from "../components/description";


const House = () => {
  const urlParams = useParams();

  const house = data.filter((data) => data.id === urlParams.id);

  if (house[0] !== undefined) {
    return (
      <MainStyle className="main main-House">
        {house.map((location, index) => (
          <section className="container" key={index}>
              <Carousel slides={data}/>
              <DescriptionLogement
              key={location.title}
              title={location.title}
              location={location.location}
              />
          </section>
        ))}
      </MainStyle>
    );
  } else {
      return (
        <main>
          <Error404 />
        </main>
      );
      
    }
    
  }

const MainStyle = styled.main`
  margin-bottom: 100px;
`;

export default House;
