import React from "react";

const SectionTitle = ({ title, type, titleStyles={} }) => {
  return (
    <div className="title" style={titleStyles}>
      {type === "big" ? <h1>{title}</h1> : <h2>{title}</h2>}
      <div className="underline"></div>
    </div>
  );
};

export default SectionTitle;
