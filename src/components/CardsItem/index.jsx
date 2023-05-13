import { Link } from "react-router-dom";
import "../../styles/Cards.css";
import { useDispatch } from "react-redux";
import { getFilterTallerSelected } from "../../redux/States/Taller";

export const CardsItem = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e, index) => {
    e.preventDefault();
    dispatch(getFilterTallerSelected(index));
  };

  return (
    <>
      <li className="cards__item" onClick={(e) => handleClick(e, props.id)}>
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <div className="cards_review">
                {props.review}
            </div>
            <h5 className="cards_item_subtexto">{props.date}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};
