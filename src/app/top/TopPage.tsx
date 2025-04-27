import React, { useContext } from "react";
import { TitleContext } from "../../contexts/TitleContext";
import { TOP } from "../../lib/commonType";
import Card from "../../components/ui/Card";

const TopPage: React.FC = () => {
  const { setTitle } = useContext(TitleContext);
  setTitle(TOP);

  return (
    <div
      style={{
        paddingTop: "20px"
      }}
    >
      <div className="flex flex-wrap max-w-6xl mx-auto gap-5">

        <Card
          cardImageUrl=""
          cardTitle="Canvas 1"
          lastUpdateUser="ichio"
          lastUpdateDate="2021-09-01"
          loginUserNames={[{ "name": "ichio", "color": "red" }, { "name": "taro", "color": "blue" }]}
        />
                <Card
          cardTitle="Canvas 1"
          lastUpdateUser="ichio"
          lastUpdateDate="2021-09-01"
          loginUserNames={[{ "name": "ichio", "color": "red" }, { "name": "taro", "color": "blue" }]}
        />
        <Card
          cardTitle="Canvas 1"
          lastUpdateUser="ichio"
          lastUpdateDate="2021-09-01"
          loginUserNames={[{ "name": "ichio", "color": "red" }, { "name": "taro", "color": "blue" }]}
        />

        <Card
          cardTitle="Canvas 1"
          lastUpdateUser="ichio"
          lastUpdateDate="2021-09-01"
          loginUserNames={[{ "name": "ichio", "color": "red" }, { "name": "taro", "color": "blue" }]}
        />

      </div>
    </div>
  )
};
export default TopPage;
