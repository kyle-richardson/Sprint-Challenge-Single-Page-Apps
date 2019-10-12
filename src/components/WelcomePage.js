import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"
import {Button, Header} from "./Styles"

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to="/characters">
          <Button>Enter!</Button>
        </Link>
      </Header>
    </section>
  );
}
