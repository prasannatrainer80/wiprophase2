import React from "react";

export const themes = {
    light: {
      background: "green",
      text: "orange",
    },
    dark: {
      background: "black",
      text: "white",
    },
  };
  
  export const ThemeContext = React.createContext(themes.light);
