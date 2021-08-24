import React, { useState } from "react";
import styled from "styled-components";
import Page from "./Page";

import man from "../assets/man.jpg";

const Me = styled.h1`
  color: #fff;
  font-family: "Urbanist", sans-serif;
`;

const Photo = styled.img`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 300px;
  height: auto;
  border: 3px solid #fff;
  margin: 20px 10px;
`;

function About() {
  return (
    <Page title="About ME">
      <div>
        <Photo src={man} alt="AAQUIB MIRZA" />

        <Me className="display-3">AAQUIB MIRZA</Me>
        <p className="lead text-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam totam
          ipsam voluptates repudiandae nulla. Autem ea quisquam quis quibusdam,
          voluptatibus pariatur quas ad molestiae sed atque dignissimos error
          amet ex!
        </p>

        <p className="lead text-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          rem et culpa ullam quaerat recusandae, natus eligendi fugit voluptates
          dolores excepturi distinctio nisi ab vel perspiciatis tenetur, dolorum
          pariatur nostrum!
        </p>

        <h3 className="h2" style={{ color: "#fff" }}>
          Specialities
        </h3>
        <p className="lead text-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          quas error cupiditate excepturi consequuntur necessitatibus cumque
          vitae eos commodi. Quae repudiandae qui rem odio et ratione voluptatem
          corporis tempora quibusdam.
        </p>
        <p className="lead text-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          quas error cupiditate excepturi consequuntur necessitatibus cumque
          vitae eos commodi. Quae repudiandae qui rem odio et ratione voluptatem
          corporis tempora quibusdam.
        </p>
      </div>
    </Page>
  );
}

export default About;
