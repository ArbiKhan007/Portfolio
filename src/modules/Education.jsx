import React from "react";
import styled from "styled-components";
import Page from "./Page";

const EduBox = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  color: #000;
  padding: 2rem;
  margin: 1rem 0;
`;

function Education() {
  return (
    <Page title="Education">
      <EduBox>
        <div>
          <h2>Degree Name</h2>
          <h3>School/College Name</h3>
        </div>
        <div>
          <h5>2020 to {new Date().getFullYear()}</h5>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            in vitae sint nulla delectus quidem esse ipsa impedit consequuntur
            tenetur tempore dolor unde illo iste, quia praesentium distinctio
            harum alias!
          </p>
        </div>
      </EduBox>
      <EduBox>
        <div>
          <div>
            <div>
              <h2>Degree Name</h2>
              <h3>Integral University Lucknow</h3>
            </div>
            <div>
              <h5>2020 to {new Date().getFullYear()}</h5>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            in vitae sint nulla delectus quidem esse ipsa impedit consequuntur
            tenetur tempore dolor unde illo iste, quia praesentium distinctio
            harum alias!
          </p>
        </div>
      </EduBox>
      <EduBox>
        <div>
          <div>
            <div>
              <h2>Degree Name</h2>
              <h3>School/College Name</h3>
            </div>
            <div>
              <h5>2020 to {new Date().getFullYear()}</h5>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            in vitae sint nulla delectus quidem esse ipsa impedit consequuntur
            tenetur tempore dolor unde illo iste, quia praesentium distinctio
            harum alias!
          </p>
        </div>
      </EduBox>
    </Page>
  );
}

export default Education;
