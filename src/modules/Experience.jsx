import React from "react";
import styled from "styled-components";
import Page from "./Page";

const JobBox = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  color: #000;
  padding: 2rem;
  margin: 1rem 0;
`;

function Experience() {
  return (
    <Page title="Experience">
      <JobBox>
        <div className="d-flex justify-content-between">
          <div>
            <h2>Job Post</h2>
            <h3>Company Name</h3>
          </div>

          <div>
            <h5>2020 to {new Date().getFullYear()}</h5>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vero
          magni culpa quasi nemo rerum perferendis voluptates cumque
          consequuntur optio, perspiciatis sit tempora labore nulla repellat
          neque illum dolor obcaecati.
        </p>
      </JobBox>
      <JobBox>
        <div className="d-flex justify-content-between">
          <div>
            <h2>Job Post</h2>
            <h3>Company Name</h3>
          </div>

          <div>
            <h5>2020 to {new Date().getFullYear()}</h5>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vero
          magni culpa quasi nemo rerum perferendis voluptates cumque
          consequuntur optio, perspiciatis sit tempora labore nulla repellat
          neque illum dolor obcaecati.
        </p>
      </JobBox>
      <JobBox>
        <div className="d-flex justify-content-between">
          <div>
            <h2>Job Post</h2>
            <h3>Company Name</h3>
          </div>

          <div>
            <h5>2020 to {new Date().getFullYear()}</h5>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vero
          magni culpa quasi nemo rerum perferendis voluptates cumque
          consequuntur optio, perspiciatis sit tempora labore nulla repellat
          neque illum dolor obcaecati.
        </p>
      </JobBox>
    </Page>
  );
}

export default Experience;
