import styled from "styled-components";
import { useState, useEffect } from "react";
import { PublicRoutes } from "../../routes/routes";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/NavBar.css";
import Sucre from "../../../assets/logoFundation.png";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => setClick(!click);

  const closeMobileMenu = (e, index) => {
    e.preventDefault();
    setClick(false);
  };

  const showButton = () => {};

  const Category = [
    // { id: "1", name: "Catalogo", route: `${PublicRoutes}` },
    { id: "2", name: "Talleres", route: `${PublicRoutes.tallerInformation}` },
    { id: "3", name: "Realizar Donacion", route: `${PublicRoutes.tallerInformation}` },
  ];

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbarInitial">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              src={Sucre}
              alt="...cargando"
              style={{ width: "70px:", height: "68px" }}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {Category.map((obj) => (
              <li
                className="nav-item"
                key={obj.id}
                onClick={(e) => closeMobileMenu(e, obj.id)}
              >
                <Link to={obj.route} className="nav-links">
                  {obj.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/" className="navbar-logo">
            {/* <img
              src={Sucre}
              alt="...cargando"
              style={{ width: "70px:", height: "68px" }}
            /> */}
            <Title>Apoyemos Causas Nobles</Title>
            
          </Link>
        </div>
      </nav>
    </>
  );
};

const Title = styled.div`
  font-size: 22px;
  font-family: Segoe Script;

  @media screen and (max-width:767px){
    font-size: 16px;
    margin: 0 0 0 5rem;
  }
`;