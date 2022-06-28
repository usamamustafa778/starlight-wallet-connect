import React from "react";

export default function SIcons() {
  return (
    <div className="socialIcons">
      <a
        target="_blank"
        rel="noreferrer"
        title="Twitter Icon"
        href="https://twitter.com"
      >
        <div className="sIcon twitter"></div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        title="Instagram Icon"
        href="https://instagram.com"
      >
        <div className="sIcon instagram"></div>{" "}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        title="Discord Icon"
        href="https://discord.com"
      >
        {" "}
        <div className="sIcon discord"></div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        title="Opensea Icon"
        href="https://opensea.io"
      >
        {" "}
        <div className="sIcon opensea"></div>{" "}
      </a>
    </div>
  );
}
