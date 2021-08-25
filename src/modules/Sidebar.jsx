import React, { useState } from "react";
import styled from "styled-components";
import SectionLink from "./SectionLink";
import { device } from "../device";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const SidebarDiv = styled.div`
  border-top: 3px solid #fff;
  margin: 0 1rem;
  display: ${(props) => (props.display ? "block" : "none")};

  @media ${device.laptop} {
    display: block;
  }
`;

const Burger = styled.div`
  padding: 1rem;

  @media ${device.laptop} {
    display: none;
  }
`;

function Sidebar(props) {
  const [display, setDisplay] = useState(false);

  const links = [
    {
      name: "about",
      address: "/about",
    },
    {
      name: "projects",
      address: "/projects",
    },
    {
      name: "skills",
      address: "/skills",
    },
    {
      name: "experience",
      address: "/experience",
    },
    {
      name: "education",
      address: "/education",
    },
    {
      name: "links",
      address: "/links",
    },
    {
      name: "contact",
      address: "/contact",
    },
  ];

  return (
    <div>
      <Burger onClick={() => setDisplay((prev) => !prev)}>
        <FontAwesomeIcon icon={display ? faTimes : faBars} size="2x" />
      </Burger>

      <SidebarDiv display={display} className={props.className}>
        {links.map((el) => {
          return <SectionLink to={el.address} toAdd={el.name} />;
        })}
      </SidebarDiv>
    </div>
  );
}

export default Sidebar;
