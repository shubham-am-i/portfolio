import React from "react";
import "./footer.css";
import { IoMdRocket } from "react-icons/io";

export default function Footer() {
  return (
    <footer>
      <a href="#">
      <IoMdRocket className="rocket-top" />
      <p>Back to Top</p>
      </a>
    </footer>
  );
}
