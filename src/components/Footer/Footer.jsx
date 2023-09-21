import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Footer = ({ className, inputType = "email" }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="overlap-group-2">
        <div className="sections">
          <div className="div-2">
            <div className="text-wrapper-9">Sobre nosotros</div>
            <p className="text-wrapper-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus
              facilisi.
            </p>
          </div>
          <div className="div-2">
            <div className="text-wrapper-9">Mi cuenta</div>
            <div className="div-3">
              <div className="text-wrapper-11">Información personal</div>
              <div className="text-wrapper-12">Direcciones</div>
              <div className="text-wrapper-12">Mascotas</div>
              <div className="text-wrapper-12">Órdenes</div>
              <div className="text-wrapper-12">Agenda</div>
            </div>
          </div>
          <div className="div-2">
            <div className="text-wrapper-9">Información</div>
            <div className="div-3">
              <div className="text-wrapper-11">Formulario de contacto</div>
              <div className="text-wrapper-12">Preguntas frecuentes</div>
              <div className="text-wrapper-12">Términos y condiciones</div>
              <div className="text-wrapper-12">Política de privacidad</div>
            </div>
          </div>
          <div className="div-2">
            <div className="text-wrapper-9">Atención al cliente</div>
            <div className="div-3">
              <div className="address">
                <p className="text-wrapper-13">Bello Monte, calle XXXX, local 1</p>
              </div>
              <div className="telephone">
                <div className="text-wrapper-13">(0212) 575 54 12</div>
              </div>
              <div className="email">
                <input className="soporte-maxipet-com" placeholder="soporte@maxipet.com" type={inputType} />
              </div>
              <div className="text-wrapper-12">Lunes a Viernes</div>
              <p className="text-wrapper-12">9:00 a.m. - 5:00 p.m.</p>
              <img className="RRSS" alt="Rrss" src="/img/rrss-1.png" />
            </div>
          </div>
        </div>
        <img className="dog-house" alt="Dog house" src="/img/dog-house.svg" />
        <img className="tree" alt="Tree" src="/img/tree.svg" />
      </div>
      <div className="copyright">
        <div className="text-2">
          <p className="text-wrapper-14">
            Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado por Avila Tek
          </p>
          <img className="avila" alt="Avila" src="/img/avila.svg" />
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  inputType: PropTypes.string,
};
