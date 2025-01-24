import React, { useState } from "react";
import "../assets/styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const handleLoginClick = (event) => {
    event.preventDefault();
    navigate("/Books");
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordModal(true);
  };

  const handleCloseModal = () => {
    setShowForgotPasswordModal(false);
  };

  const handleSendEmail = () => {
    alert("Se ha enviado un correo para restablecer la contraseña.");
    setShowForgotPasswordModal(false);
  };

  return (
    <div className="login-page">
      <div className="container">
        <p className="brand">Bookshelf Reader</p>
        <div className="card">
          <h2 className="title">Iniciar sesión</h2>
          <form className="form">
            <label className="label">Correo electrónico:</label>
            <input type="email" className="input" />

            <label className="label">Contraseña:</label>
            <input type="password" className="input" />

            <button type="submit" className="button" onClick={handleLoginClick}>
              Iniciar sesión
            </button>
          </form>
          <div className="links">
            <a href="#" className="link" onClick={handleForgotPasswordClick}>
              He olvidado la contraseña
            </a>
            <a href="/Register" className="link">
              Registrar cuenta
            </a>
          </div>
        </div>

        {showForgotPasswordModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Recuperar contraseña</h3>
              <label className="label">Correo electrónico:</label>
              <input
                type="email"
                className="input"
                placeholder="Introduce tu correo"
              />
              <button className="button" onClick={handleSendEmail}>
                Enviar
              </button>
              <button className="close-button" onClick={handleCloseModal}>
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
