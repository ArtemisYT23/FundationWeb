import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CardsItem } from "../CardsItem";
import { PublicRoutes } from "../../routes/routes";
import "../../styles/Cards.css";

export const Cards = () => {
  const { tallerState, imgTallerState } = useSelector((store) => store);
  const { TallerData } = tallerState;
  const { imagenTallerData } = imgTallerState;
  const [dataTaller, setDataTaller] = useState([]);

  useEffect(() => {
    TallerData.map((taller) => {
      const newTaller = imagenTallerData.filter(
        (item) => item.id_Taller == taller.id
      );
      if (newTaller) {
        taller.image = newTaller;
      }
      //   imagenTallerData.map((item) => {
      //     if (taller.id == item.id_Taller) {
      //       taller.image = item.imagen;
      //     }
      //   });
    });

    setDataTaller(TallerData);
    // console.log(TallerData);
  }, [TallerData]);

  return (
    <div className="cards">
      {/* <h1>Turismo</h1> */}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {dataTaller.map((product, i) => (
              <CardsItem
                key={i}
                id={product.id}
                src={product.image[0].imagen}
                text={product.title}
                label="Fundacion"
                date={product.dateTaller}
                review={product.review}
                path={`/initialState/${PublicRoutes.tallerDetails}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
