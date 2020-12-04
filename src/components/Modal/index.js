import React from "react";
import ReactDom from "react-dom";
import Modal from "./Modal";

function IndexPage({ isOpen, ...props }) {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <Modal {...props} />,
    document.getElementById("portal")
  );
}

export default IndexPage;
