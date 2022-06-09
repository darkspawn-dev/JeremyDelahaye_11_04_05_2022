// import '../styles/home.css';
import styled from 'styled-components';
import Section from "../components/section";
import img from "../assets/chezvous.png";
import Thumb from '../components/thumb';
import Carousel from '../components/carousel'
import { CarouselData } from '../data/CarouselData'
import Gallery from '../components/gallery';


function Home () {
    return (
    <div>
        <main class="main">
            <StyleSectionContainer class="container">
                <Section text={`Chez vous, partout et ailleurs`}
                class={`section`}
            />
            </StyleSectionContainer>
        <Gallery />
        {/* <Carousel slides={CarouselData}/> */}
        </main>

        </div>
    )
}

export default Home

const StyleSectionContainer = styled.div`
  width: auto;
  margin: 50px 100px 50px 100px;
  padding: 40px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9;
    border-radius: 25px;

    & h1 {
      position: relative;
      font-weight: normal;
      text-align: center;
      font-size: 3rem;
      color: #fff;
      margin: auto;
    }

    `
