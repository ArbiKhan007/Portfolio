import React, { useEffect } from "react";
import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";

import Page from "./Page";
import { device } from "../device";

const SkillDiv = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 240px;
  column-gap: 20px;
  row-gap: 20px;

  @media ${device.mobileL} {
    grid-template-columns: auto;
  }

  @media ${device.laptop} {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }

  @media ${device.laptopL} {
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto;
  }
`;

const Circle = styled.div`
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 200px;
  margin: 10px;
  padding: 20px;

  @media ${device.laptop} {
    width: 220px;
    height: 220px;
  }
`;

function Skills() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("#circle"), {
      max: 25,
      speed: 600,
      scale: 1.15,
      perspective: 1000,
      glare: false,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
    });
  }, []);

  const skillArr = [
    {
      name: "C++",
      level: "Intermediate",
    },
    {
      name: "Java",
      level: "Intermediate",
    },
    {
      name: "MongoDB",
      level: "Intermediate",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
    },
    {
      name: "Node.js",
      level: "Intermediate",
    },
    {
      name: "GIT",
      level: "Intermediate",
    },
  ];

  return (
    <Page title="Skills">
      <SkillDiv>
        {skillArr.map((el) => {
          return (
            <Circle
              style={{
                transform: "perspective(1000px)",
                transformStyle: "preserve-3d",
              }}
              id="circle"
            >
              <h3
                style={{ transform: "translateZ(20px)" }}
                className="heading-3"
              >
                {el.name}
              </h3>
              <h5
                style={{ transform: "translateZ(20px)" }}
                className="heading-5"
              >
                {el.level}
              </h5>
            </Circle>
          );
        })}
      </SkillDiv>
    </Page>
  );
}

export default Skills;
