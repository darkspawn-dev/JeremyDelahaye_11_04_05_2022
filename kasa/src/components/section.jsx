import React from "react";
import styled from "styled-components";


const HomeSection = ({ text, classname }) => {
  return (
    <SectionStyle className={classname}>
      <h1>{text}</h1>
    </SectionStyle>
  );
};

const SectionStyle = styled.div`
  & {
    position: relative;
    margin: 50px 0;
    color: #fff;
    padding: 40px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    & h1 {
      position: relative;
      font-weight: normal;
      text-align: center;
      font-size: 3rem;
      z-index: 1;
    }

`;

export default HomeSection;
