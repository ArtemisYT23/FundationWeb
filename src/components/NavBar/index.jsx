import { useState, useEffect } from "react";
import { PublicRoutes } from "../../routes/routes";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/NavBar.css";
import Sucre from "../../../assets/sucre.png";

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
    { id: "1", name: "Catalogo" },
    { id: "2", name: "Charlas" },
    { id: "3", name: "Blog" },
    { id: "4", name: "Blog" },
    { id: "5", name: "Blog" },
]

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
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
                <Link to={obj.name} className="nav-links">
                  {obj.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <Link to="/" className="navbar-logo">
            <img
              src={Sucre}
              alt="...cargando"
              style={{ width: "70px:", height: "68px" }}
            />
          </Link>

        </div>
      </nav>
    </>
  );
};
