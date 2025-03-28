import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";
import Title from "../components/sections/Title";

interface TitleContextProps {
  title: string;
  setTitle: (title: string) => void;
}

export const TitleContext = createContext<TitleContextProps>({
  title: "",
  setTitle: () => {},
});

const Layout: React.FC = () => {
  const [title, setTitle] = useState("Default Title");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      <Header />
      <Title />
      <Outlet />
    </TitleContext.Provider>
  );
};

export default Layout;
