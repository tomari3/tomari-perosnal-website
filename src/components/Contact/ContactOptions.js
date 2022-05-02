import React from "react";

import { ExternalLink } from "../../styles/ExternalLink";

const contactList = [
  {
    text: "email",
    link: "mailto:tom_ari@ymail.com",
  },
  {
    text: "github",
    link: "https://github.com/tomari3",
  },
  {
    text: "linkedin",
    link: "https://www.linkedin.com/in/tom-ari-72034122a",
  },
];

export const ContactOptions = () => {
  const links = contactList.map((item, index) => {
    return (
      <ExternalLink $bold size="8vmax" key={index} href={item.link}>
        {item.text}
      </ExternalLink>
    );
  });

  return <>{links}</>;
};
