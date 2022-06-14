import React from "react";
import Thumb from "./thumb";
import styled from "styled-components";
import data from "../data/data.json";

const Gallery = () => {


  return (
    <GallerySectionStyle>
      {data &&
        data.map((location, index) => (
          <Thumb className="container-fluid"
            key={`${location.title}-${index}`}
            title={location.title}
            id={location.id}
            cover={location.cover}
          />
        ))}
    </GallerySectionStyle>
  );
};

const GallerySectionStyle = styled.div`
width: 1240px;
height: 829px;
overflow: scroll;

display: grid;
grid-template-columns: repeat(3, 400px);
grid-template row: repeat(8, 1fr)
justify-content:center;
background-color: #f6f6f6;
border-radius: 25px;
grid-row-gap: 300px;
grid-column-gap: px;
margin:auto;
padding-left:145px

`;

export default Gallery;
