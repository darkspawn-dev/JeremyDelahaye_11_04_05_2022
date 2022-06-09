import { Link } from 'react-router-dom'
import '../styles/thumb.css'
import styled from 'styled-components'
import React from 'react'


const Thumb = ({ title, id, cover}) => {

    return (
        <Link to={`house/${id}`}>
        <ContainerThumb>
        <div className="thumb">
            <img src={cover} alt="" />   
            <p>{title}</p>
    </div>
    </ContainerThumb>
    </Link>
    )
    
}
export default Thumb;

const ContainerThumb = styled.div`*
width: 340px;
height: 340px;
position: relative;


  img {
        width: 100%;
        height:100%;
        border-radius: 10px;
        object-fit: cover;
  }
  
  p {
    position: absolute;
    font-size: 1.125rem;
    color: #fff;
    left: 20px;
    bottom: 23px;
    font-weight: 600;
    width: 90%;
    z-index: 2;
    pointer-events: none;
  }

`;