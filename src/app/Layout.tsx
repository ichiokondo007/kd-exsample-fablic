import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";
import Title from "../components/sections/Title";
import { TitleContext } from "../contexts/TitleContext";
import { SnackbarProvider } from "../components/ui/Snackbar";

const Layout: React.FC = () => {
  const [title, setTitle] = useState("Default Title");

  return (
    <SnackbarProvider>
      <TitleContext.Provider value={{ title, setTitle }}>
        <Header />
        <Title />
        <Outlet />
      </TitleContext.Provider>
    </SnackbarProvider>
  );
};

export default Layout;
