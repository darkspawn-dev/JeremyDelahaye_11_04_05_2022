import { Navigate, useParams } from "react-router-dom";
import data from "../data/data.json";
import Accordion from "../components/accordion";
import styled from "styled-components";
import Empty from "../assets/Empty.png";
import Full from "../assets/Full.png"
import Tag from "./tag";

const Rate = ({ sellerName, sellerImage }) => {

    const urlParams = useParams();
    const House = data.filter((data) => data.id === urlParams.id);

    if (House === []) {
        return <Navigate to="/Error404" />;
      }

      const stars = [1, 2, 3, 4, 5]
      return(
        <RateD>
            <Seller>
                <p>{sellerName}</p>
                <img src={sellerImage} alt={sellerImage}/>
            </Seller>

        <Stars>
        {House.map((star, index) =>
          stars.map((stars) =>
            star.rating <= stars - 1 ? (
              <img src={Empty} alt="Empty" key={`${index}-${stars}`} />
            ) : (
                <img src={Full} alt="Full" key={`${index}-${stars}`} />
            )
          )     
        )}
            </Stars> 

            </RateD>
            )
}

export default Rate
const RateD = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`

const Seller = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
img {
    border-radius: 100%;
    width: 65px;
    height: 65px;
  }

  p {
    width: 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 10px;
    text-align: end;
    font-size: 1.125rem;
  }
`

const Stars = styled.div`
  img {
    margin-left: 10px;
  }
  `