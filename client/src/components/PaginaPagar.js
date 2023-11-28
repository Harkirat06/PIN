import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Button, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "./PaginaPagar.css"

function PaginaPagar({ context }) {
    const { elementosSeleccionados } = useContext(context);

    const productList = elementosSeleccionados[0];
    //const productList = Object.values(elementosSeleccionados[0]);

    const navigate = useNavigate();

    const handleLink = (item) => {
        if (item !== "Elemento no seleccionado") {
            if (item.selectedType == "segundaMano") {
                navigate("/pagarNuestro")

            } else {
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
                return (
                    <Row>
                        <Col>{propiedad + " " + i++}</Col>
                        <Col>{item.nombre}</Col>
                        <Col onClick={() => handleLink(item)}>{item.selectedType}</Col>
                        <Col>{item.selectedPrice} €</Col>
                    </Row>
                );
            });
          } else {
            return (
                <Row>
                    <Col>{propiedad}</Col>
                    <Col>{productList[propiedad].nombre}</Col>
                    <Col onClick={() => handleLink(productList[propiedad])}>{productList[propiedad].selectedType}</Col>
                    <Col>{productList[propiedad].selectedPrice} €</Col>
                </Row>
            );
          }
        } else {
            return (
            <Row>
                <Col>{propiedad}</Col>
                <Col>{"Elemento no seleccionado"}</Col>
                <Col></Col>
                <Col></Col>
            </Row>
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
        <Container>
            <h1>Your selected Products</h1>
            {Object.keys(productList).map((propiedad) => (
                handleSeleccion(propiedad)
            ))}

            <Button onClick={() => openLinks()}>Abrir Links</Button>
            <Button>Pagar</Button>
        </Container>
    );
}

export default PaginaPagar;