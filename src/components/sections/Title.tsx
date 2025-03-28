import React, { useContext } from "react";
import { TitleContext } from "../../app/Layout";

const Title: React.FC = () => {
  const { title } = useContext(TitleContext);

  return (
    <div className="title-container">
      <span>{title}</span>
    </div>
  );
};

export default Title;

