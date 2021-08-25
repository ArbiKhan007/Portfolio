import React from "react";
import styled from "styled-components";
import Page from "./Page";
import { device } from "../device";

const ProjBox = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  color: #000;
  padding: 2rem;
  margin: 1rem 0;
  margin-right: 20px;
  transition: transform 0.5s ease-out;

  @media ${device.laptop} {
    width: 320px;
    height: 400px;
  }

  &:hover {
    transform: scale(1.005) translate(10px);
  }
`;

function Projects() {
  return (
    <Page title="Projects">
      <p className="text-content lead">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum iste
        enim eos modi dolores id aperiam vel, eius culpa quas quo sapiente alias
        qui beatae, ratione, quisquam magni repellat delectus.
      </p>

      <div className="d-flex justify-content-between row container">
        <ProjBox className="col">
          <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A maxime
            rem, suscipit corrupti corporis deserunt ipsum possimus nemo
            voluptates unde voluptate necessitatibus perferendis deleniti nisi
            animi, obcaecati ex doloremque tempora.
          </p>
          <a href="/">Link to the project</a>
        </ProjBox>
        <ProjBox className="col">
          <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A maxime
            rem, suscipit corrupti corporis deserunt ipsum possimus nemo
            voluptates unde voluptate necessitatibus perferendis deleniti nisi
            animi, obcaecati ex doloremque tempora.
          </p>
          <a href="/">Link to the project</a>
        </ProjBox>
        <ProjBox className="col">
          <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A maxime
            rem, suscipit corrupti corporis deserunt ipsum possimus nemo
            voluptates unde voluptate necessitatibus perferendis deleniti nisi
            animi, obcaecati ex doloremque tempora.
          </p>
          <a href="/">Link to the project</a>
        </ProjBox>
      </div>
    </Page>
  );
}

export default Projects;
