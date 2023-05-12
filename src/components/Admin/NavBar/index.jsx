import { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../../routes/routes";
import { FaBars, FaUserEdit } from "react-icons/fa";
import "../../../styles/NavBarAdmin.css";
import Sucre from "../../../../assets/sucre.png";

export const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const menuItem = [
    {
      path: `${PrivateRoutes.comentary}`,
      name: "Comentarios",
      icon:  <FaUserEdit />
    },
    {
      path: `${PrivateRoutes.video}`,
      name: "Videos",
      icon: <FaUserEdit />,
    },
    {
      path: `${PrivateRoutes.taller}`,
      name: "Taller",
      icon: <FaUserEdit />,
    },
    {
        path: `${PrivateRoutes.sladers}`,
        name: "Sladers",
        icon: <FaUserEdit />,
      },
    {
      path: `${PrivateRoutes.imagenTaller}`,
      name: "Imagen de taller",
      icon: <FaUserEdit />,
    }
  ];

  return (
    <div className="container-Side">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          {isOpen ? (
            <Title onClick={toggle}>
              <img src={Sucre} alt="...Cargando" />
            </Title>
          ) : (
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          )}
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const Title = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  text-align: justify;
  img {
    width: 150px;
    height: 100%;
  }
`;
