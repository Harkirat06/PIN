import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Button, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "./PaginaPagar.css"

function PaginaPagar({ context }) {
    const { elementosSeleccionados } = useContext(context);

    const productList = elementosSeleccionados[0];
    //const productList = Object.values(elementosSeleccionados[0]);

    let total = 0;

    const navigate = useNavigate();

    const handleLink = (item) => {
        if (item !== "Elemento no seleccionado") {
            if (item.selectedType != "segundaMano") {
                openInNewTab(item.link)
            }
        }
    }

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

    const handleSeleccion = (propiedad) => {
        if (productList[propiedad] !== "Elemento no seleccionado") {
          if (Array.isArray(productList[propiedad])) {
            let i = 1;
            return productList[propiedad].map((item) => {
                total += item.selectedPrice;
                return (
                    <div>
                        <Row>
                            <Col className="propiedad">{propiedad + " " + i++}</Col>
                            <Col className="productName">{item.nombre}</Col>
                            <Col className="priceType" onClick={() => handleLink(item)}>{item.selectedType}</Col>
                            <Col className="price">{item.selectedPrice.toFixed(2)} €</Col>
                        </Row>
                        <hr className="horizontalLine"/>
                    </div>
                    
                );
            });
          } else {
            total += productList[propiedad].selectedPrice;
            return (
                <div>
                    <Row>
                        <Col className="propiedad">{propiedad}</Col>
                        <Col className="productName">{productList[propiedad].nombre}</Col>
                        <Col className="priceType" onClick={() => handleLink(productList[propiedad])}>{productList[propiedad].selectedType}</Col>
                        <Col className="price">{productList[propiedad].selectedPrice.toFixed(2)} €</Col>
                    </Row>
                    <hr className="horizontalLine"/>
                </div>
            );
          }
        } else {
            return (
            <div>
                <Row>
                    <Col className="propiedad">{propiedad}</Col>
                    <Col className="productName">{"Elemento no seleccionado"}</Col>
                    <Col className="priceType"></Col>
                    <Col className="price"></Col>
                </Row>
                <hr className="horizontalLine"/>
            </div>
          );
        }
    }

    const openLinks = () => {
        Object.keys(productList).map((propiedad) => {
            if (propiedad == "disco") {
                productList[propiedad].map((item) => {
                    handleLink(item);
                })
            } else {
                handleLink(productList[propiedad]);
            }
        })
    }

    return (
        <div className="PaginaPagar">
            <div className="header">
                <a><img className="logo"/></a>
                <a><img className="userProfile"/></a>
            </div>
            <div className="mainWrapper">
                <span className="title">tus productos seleccionados</span>
                <div className="listWrapper">
                    <div className="list">
                        {Object.keys(productList).map((propiedad) => (
                            handleSeleccion(propiedad)
                        ))}
                        <div>
                            <Row className="totalRow">
                                <Col className="propiedad"/>
                                <Col className="productName"/>
                                <Col className="priceType"/>
                                <Col className="total">{total.toFixed(2)} €</Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="btnWrapper">
                    <Button className="navBtn" onClick={()=>navigate("/marketplace")}>Volver al inicio</Button>
                    <Button className="navBtn" onClick={() => openLinks()}>Abrir Links</Button>
                </div>
            </div>
        </div>
    );
}

export default PaginaPagar;