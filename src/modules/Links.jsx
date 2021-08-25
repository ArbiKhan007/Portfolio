import React from "react";
import Page from "./Page";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const LinkBox = styled.div`
  width: 100%;
  height: 58px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  color: #000;
  font-size: 1rem;
  align-items: center;
  margin: 1rem 0;

  svg {
    font-size: 1.8rem;
  }

  a {
    display: block;
    font-size: 1.25rem;
    text-decoration: none;
    font-weight: 500;
    color: #000;
  }

  &:hover {
    background-color: #bbbbbb;
    color: #fff;

    a {
      color: #fff;
    }
  }
`;

function Links() {
  return (
    <Page title="Links">
      <LinkBox>
        <a href="/">LinkedIn</a>
        <FontAwesomeIcon icon={faLinkedin} />
      </LinkBox>
      <LinkBox>
        <a href="/">GitHub</a>
        <FontAwesomeIcon icon={faGithub} />
      </LinkBox>
      <LinkBox>
        <a href="/">Facebook</a>
        <FontAwesomeIcon icon={faFacebook} />
      </LinkBox>
      <LinkBox>
        <a href="/">Instagram</a>
        <FontAwesomeIcon icon={faInstagram} />
      </LinkBox>
    </Page>
  );
}

export default Links;
