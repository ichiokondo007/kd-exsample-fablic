import React, { useContext } from "react";
import { TitleContext } from "../../contexts/TitleContext";
import { getBreadcrumbByTitlename, TitleObject } from "../../lib/commonType";

const Title: React.FC = () => {
  const { title } = useContext(TitleContext);
  const titleObjects: TitleObject[] = getBreadcrumbByTitlename(title) || [];

  return (
    <div className="title-container">
      <div className="title-container__inner">
        <div className="links text-xl font-bold text-gray-800">
          {titleObjects.map((obj, index) => {
            const isLast = index === titleObjects.length - 1;
            const isCurrent = obj.titlename === title;
            return (
              <span key={obj.titlename} className="mr-2">
                {isCurrent ? (
                  <span>{obj.titlename}</span>
                ) : (
                  <a href={obj.path}>{obj.titlename}</a>
                )}
                {!isLast && ' ＞ '}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Title;

