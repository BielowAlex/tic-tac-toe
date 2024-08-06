import React from "react";
import { MainLayout } from "../layouts";
import { Board } from "../components";

const App: React.FC = () => {
  return (
    <MainLayout>
      <Board />
    </MainLayout>
  );
};

export { App };
