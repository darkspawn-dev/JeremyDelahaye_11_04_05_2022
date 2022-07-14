import { Navigate, useParams } from "react-router-dom";
import data from "../data/data.json";
import Accordion from "../components/accordion";
import styled from "styled-components";
import Rate from "./rate";
import Tag from "./tag";

const Description = () => {

    const urlParams = useParams();
    const House = data.filter((data) => data.id === urlParams.id);

    if (House === []) {
        return <Navigate to="/Error404" />;
      }
    
      return (
        <div>
          {House &&
            House.map((location, index, id) => (
              <div key={`${index}-${id}`}>
                <DescriptionHouse className="DescriptionHouse" key={`${index}-${location.id}`}>
                  <div className="container-description">
                  <div className="Title">
                    <h1>{location.title}</h1>
                    <p>{location.location}</p>
                  </div>
                <Tags> {location.tags.map((tag, index) => (
                  <Tag Title={tag} key={`${index}-${tag}`} />
                  ))}
                  </Tags>
                  <Rate sellerName={location.host.name}
                        sellerImage={location.host.picture}/>
                        </div>
                </DescriptionHouse>
    
                <Accordions className="Accordion">
                  <Accordion
                    key={`${index}-${`description`}`}
                    title="Description"
                    content={location.description}
                  />
                  <Accordion className="equipment"
                    key={`${index}-${`equipement`}`}
                    title="Équipements"
                    content={location.equipments}
                  />        
                </Accordions>
              </div>
            ))}
        </div>
      );
    };


export default Description

const DescriptionHouse = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    width: 100%;
  
.Title {
  h1 {
    display: flex;
    flex-wrap: wrap;
    font-size: 36px;
    font-weight: 400;
      margin-top: 25px;
    width: 300px;
    }
    p {
      margin-top: 10px;
      }
}

.container-description {
  width: 1000px;
  display: flex;
  justify-content:center;

}
    .DescriptionHouse {
      display: flex;
      justify-content: space-between;

      flex-wrap:wrap;
      width:100%;
    }
    `;

  const Tags = styled.div`
    display: flex;
    align-items: center;
    `;
  const Accordions = styled.div`
  display: flex;
  // align-items: flex-start;

  justify-content: center;

   .accordion {
  //   width: 45%;
    //  margin: 30px 0;
.equipment{
  display: flex;
  flex-direction: column;
}
  //   p {
  //     font-size: 1.125rem;
  //   }

  //   .accordingContent.show {
  //     max-height: 400px;
  //     opacity: 1;
  //   }
  // }
   `

