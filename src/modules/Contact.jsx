import {
  faAddressCard,
  faMailBulk,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Page from "./Page";

const ContactBox = styled.div`
  width: 100%;
  height: 58px;
  background-color: #fff;
  padding: 1rem;
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
`;

function Contact() {
  return (
    <Page title="Contact">
      <ContactBox>
        <FontAwesomeIcon icon={faMobile} />
      </ContactBox>
      <ContactBox>
        <FontAwesomeIcon icon={faMailBulk} />
      </ContactBox>
      <ContactBox>
        <FontAwesomeIcon icon={faAddressCard} />
      </ContactBox>
    </Page>
  );
}

export default Contact;
