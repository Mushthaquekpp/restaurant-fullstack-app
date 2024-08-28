import React from "react";
import "./imageContentLayout.css";

const ImageContentLayout = ({ imageSrc, content, reverse }) => {
  return (
    <div className="container-image">
      <div className={`image-content-container ${reverse ? "reverse" : ""}`}>
        <div className="image-container">
          <img src={imageSrc} alt="Content" />
        </div>
        <div className="content-container">{content}</div>
      </div>
    </div>
  );
};

export default ImageContentLayout;
