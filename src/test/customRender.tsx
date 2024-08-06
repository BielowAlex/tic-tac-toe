import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export const appRender = (children: React.ReactNode) => {
  return render(
    <BrowserRouter>
        {children}
    </BrowserRouter>,
  );
};
