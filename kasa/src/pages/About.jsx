import styled from 'styled-components';
import Section from "../components/section";
import img from "../assets/about.png";
import Accordion from '../components/accordion';

function About () {
    return (
    <div>
        <main className="main">
            <AboutStyle class="container">
                <Section text={``}
                class={`about`}
            />
            </AboutStyle>
        
            <Accordion 
            title="Fiabilité" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac dignissim purus. Nulla facilisi. Fusce quis ex justo. Sed viverra."
            />
        
        <Accordion 
        title="Respect" 
        content="La bienvaillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
        />
        
        <Accordion 
        title="Service" 
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac dignissim purus. Nulla facilisi. Fusce quis ex justo. Sed viverra."
        />
        <Accordion 
        title="Responsabilité" 
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac dignissim purus. Nulla facilisi. Fusce quis ex justo. Sed viverra."
        />
        </main>
        </div>
    )
}

export default About

const AboutStyle = styled.div`
    width: auto;
    margin: 50px 100px 50px 100px;
    position: relative;
    color: #fff;
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
    height: 223px;

  }
`;