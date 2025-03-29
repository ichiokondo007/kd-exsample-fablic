import React, { useContext } from "react";
import { TitleContext } from "../../app/Layout";

const Title: React.FC = () => {
  const { title } = useContext(TitleContext);

  return (
    <div className="title-container">
      <span className= "text-xl">{title}</span>
    </div>
  );
};

export default Title;

