import React from "react";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { ProductCard } from "../../components/ProductCard";
import { Service } from "../../components/Service";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div-4">
        <div className="overlap">
          <img className="paws" alt="Paws" src="/img/paws.png" />
          <div className="shop-by-pets">
            <div className="frame-2">
              <div className="dog-2">
                <div className="div-wrapper">
                  <div className="overlap-group-3">
                    <img className="dog-paw" alt="Dog paw" src="/img/dog-paw.svg" />
                    <img className="element" alt="Element" src="/img/1111-1-1-6.png" />
                  </div>
                </div>
                <div className="text-wrapper-16">Perros</div>
              </div>
              <div className="dog-2">
                <div className="div-wrapper">
                  <div className="overlap-group-3">
                    <img className="dog-paw" alt="Dog paw" src="/img/dog-paw.svg" />
                    <img className="element" alt="Element" src="/img/1111-1-1-6.png" />
                  </div>
                </div>
                <div className="text-wrapper-16">Gatos</div>
              </div>
              <div className="dog-2">
                <div className="div-wrapper">
                  <div className="overlap-group-3">
                    <img className="dog-paw" alt="Dog paw" src="/img/dog-paw.svg" />
                    <img className="element" alt="Element" src="/img/1111-1-1-6.png" />
                  </div>
                </div>
                <div className="text-wrapper-16">Peces</div>
              </div>
              <div className="dog-2">
                <div className="div-wrapper">
                  <div className="overlap-group-3">
                    <img className="dog-paw" alt="Dog paw" src="/img/dog-paw.svg" />
                    <img className="element" alt="Element" src="/img/1111-1-1-6.png" />
                  </div>
                </div>
                <div className="text-wrapper-17">Roedores</div>
              </div>
              <div className="dog-2">
                <div className="div-wrapper">
                  <div className="overlap-group-3">
                    <img className="dog-paw" alt="Dog paw" src="/img/dog-paw.svg" />
                    <img className="element" alt="Element" src="/img/1111-1-1-6.png" />
                  </div>
                </div>
                <div className="text-wrapper-18">Reptiles</div>
              </div>
              <div className="dog-3">
                <div className="div-wrapper">
                  <div className="overlap-group-3">
                    <img className="dog-paw" alt="Dog paw" src="/img/dog-paw.svg" />
                    <img className="element" alt="Element" src="/img/1111-1-1-6.png" />
                  </div>
                </div>
                <div className="text-wrapper-19">Placeholder</div>
              </div>
            </div>
            <p className="una-gran-variedad-de">UNA GRAN VARIEDAD DE CATEGORÍAS</p>
            <p className="text-wrapper-20">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="featured-products">
            <div className="overlap-2">
              <div className="div-5">
                <div className="div-6">
                  <ProductCard property1="paw-rating" rating="/img/rating-29.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating-29.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating-15.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating-15.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating-15.svg" />
                </div>
                <div className="div-7">
                  <ProductCard property1="paw-rating" rating="/img/rating-29.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating-29.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating-15.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating-15.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating-15.svg" />
                </div>
              </div>
              <div className="ad" />
            </div>
            <div className="productos-destacados">PRODUCTOS DESTACADOS</div>
            <p className="text-wrapper-20">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="ad-2">
            <img className="shutterstock" alt="Shutterstock" src="/img/shutterstock-1082072867-2-768x512-1.png" />
            <img className="dog-food" alt="Dog food" src="/img/dog-food-1296x728-header-1.png" />
          </div>
          <div className="best-sellers">
            <div className="product-row-wrapper">
              <div className="product-row">
                <ProductCard property1="paw-rating" rating="/img/rating-25.svg" />
                <ProductCard property1="paw-rating" rating="/img/rating-25.svg" />
                <ProductCard property1="paw-rating" rating="/img/rating.svg" />
                <ProductCard property1="paw-rating" rating="/img/rating.svg" />
                <ProductCard property1="paw-rating" rating="/img/rating.svg" />
              </div>
            </div>
            <div className="text-wrapper-21">PRODUCTOS POPULARES</div>
            <p className="text-wrapper-22">Lorem ipsum dolor sit amet.</p>
          </div>
          <img className="ad-3" alt="Ad" src="/img/ad-1.png" />
          <div className="latest-products">
            <div className="overlap-2">
              <div className="div-5">
                <div className="div-6">
                  <ProductCard property1="paw-rating" rating="/img/rating-25.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating-25.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating.svg" />
                </div>
                <div className="div-7">
                  <ProductCard property1="paw-rating" rating="/img/rating-25.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating-25.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating.svg" />
                  <ProductCard property1="paw-rating" rating="/img/rating.svg" />
                </div>
              </div>
              <img className="ad-4" alt="Ad" src="/img/ad.png" />
            </div>
            <div className="text-wrapper-21">ÚLTIMOS PRODUCTOS</div>
            <p className="text-wrapper-20">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="services">
            <div className="text-wrapper-21">NUESTROS SERVICIOS</div>
            <p className="text-wrapper-22">Lorem ipsum dolor sit amet.</p>
            <p className="text-wrapper-23">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.
            </p>
            <div className="frame-3">
              <div className="frame-4">
                <Service property1="default" />
                <Service property1="default" text="Odontología" />
                <Service property1="default" text="Veterinario" />
              </div>
              <div className="frame-4">
                <Service property1="default" text="Entrenamiento" />
                <Service property1="default" text="Psicología canina" />
                <Service property1="default" text="Fiestas de cumpleaños" />
              </div>
            </div>
          </div>
          <Banner className="banner-instance" />
        </div>
        <div className="brands">
          <p className="text-wrapper-21">TRABAJAMOS CON LAS MEJORES MARCAS</p>
          <p className="text-wrapper-22">Lorem ipsum dolor sit amet.</p>
          <div className="brands-logo">
            <img className="img-2" alt="Img" src="/img/c4ac5c165044d15d239982e6b22a7317-3.png" />
            <img className="img-2" alt="Img" src="/img/c4ac5c165044d15d239982e6b22a7317-4.png" />
            <img className="img-2" alt="Img" src="/img/c4ac5c165044d15d239982e6b22a7317-5.png" />
            <img className="img-2" alt="Img" src="/img/c4ac5c165044d15d239982e6b22a7317-6.png" />
          </div>
          <p className="text-wrapper-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.
          </p>
        </div>
        <Footer className="footer-instance" />
        <div className="navbar">
          <div className="links-wrapper">
            <div className="links">
              <div className="sublinks">
                <div className="text-wrapper-25">Inicio</div>
                <div className="text-wrapper-25">Comprar por marca</div>
                <div className="text-wrapper-25">Comprar por mascota</div>
                <div className="text-wrapper-25">Nuestros servicios</div>
                <div className="text-wrapper-25">Promociones</div>
                <div className="text-wrapper-25">Nosotros</div>
              </div>
            </div>
          </div>
          <div className="main-bar">
            <img className="logo-maxipet-borde" alt="Logo maxipet borde" src="/img/logo-maxipet-borde-blanco-1-2.png" />
            <div className="options">
              <img className="img-3" alt="Location icon" src="/img/location-icon-2.png" />
              <img className="img-3" alt="Pet icon" src="/img/pet-icon.svg" />
              <img className="img-3" alt="User" src="/img/user.svg" />
              <div className="ellipse-wrapper">
                <div className="ellipse" />
              </div>
            </div>
            <div className="search-bar">
              <div className="overlap-3">
                <Input
                  barClassName="design-component-instance-node"
                  className="input-instance"
                  divClassName="input-3"
                  overlapGroupClassName="input-2"
                  property1="labeless"
                  text="Buscador"
                />
                <img className="search" alt="Search" src="/img/search.svg" />
              </div>
            </div>
          </div>
          <div className="details-3">
            <div className="branch">
              <img className="location-icon" alt="Location icon" src="/img/location-icon-1.png" />
              <div className="sucursal">
                <div className="text-wrapper-26">Bello Monte</div>
                <img className="frame-5" alt="Frame" src="/img/frame.svg" />
              </div>
            </div>
            <img className="RRSS-2" alt="Rrss" src="/img/rrss.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
