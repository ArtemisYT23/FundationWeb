import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Security } from "../../config/axios";
import { getUserTockenSesion } from "../../redux/States/LoginSesion";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { PrivateRoutes } from "../../routes/routes";
import "../../styles/Login.css";

export const LoginSesion = () => {
  const inputs = document.querySelectorAll(".input");

  function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sesionStart = {
      userName: userName,
      password: password,
    };

    axios({
      url: `${Security}Usuario/Autenticar`,
      method: "POST",
      data: sesionStart,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          dispatch(getUserTockenSesion(response.data.token));
          navigate(`/${PrivateRoutes.private}`);
        }
      })
      .catch(function (error) {
        toast.error(error.response?.data || "Error en Inicio de Sesion");
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className="container">
      <div className="img">
        {/* <img src={bg} alt="...cargando" /> */}
      </div>
      <div className="login-content">
        <form onSubmit={handleSubmit}>
          {/* <img src={Sucre} alt="..cargando" /> */}
          {/* <h2 className="title">Iniciar Sesión</h2> */}
          <br />
          <br />
          <br />
          <div className="input-div one">
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="div">
              <h5>Username</h5>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="input"
                required
              />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="div">
              <h5>Password</h5>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="input"
                required
              />
            </div>
          </div>
          <a href="#">Forgot Password?</a>
          <input type="submit" className="btn" value="Login" />
          <input type="button" className="btn" value="Turismo" onClick={(e) => {handleClick(e)}}/>
        </form>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 3500,
          style: {
            background: "#fff",
            color: "var(--PrimaryColor)",
          },
        }}
      />
    </div>
  );
};
