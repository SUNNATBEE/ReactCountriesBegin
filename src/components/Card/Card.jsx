import "./Card.css";
import Germany from "../../assets/germany.png";

const Card = () =>{
    return (
        
          <li className="card__item">
            <img className="card__img" src={Germany} alt="Germany" />
            <div className="card__textbox">
              <h2 className="card__title mt-0">Germany</h2>
              <p className="card__info ">
                <strong className="card__name">Population:</strong>
                83 million
              </p>
              <p className="card__info ">
                <strong className="card__name">Region: </strong>
                Europe
              </p>
              <p className="card__info ">
                <strong className="card__name"> Capital: </strong>
                Berlin
              </p>
            </div>
          </li>
     
    );
    }
    
    export default Card;