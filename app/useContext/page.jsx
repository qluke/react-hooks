"use client";

/**
 * useContext is a React Hook that lets you read and subscribe to context from your component.
 */
import React, { useContext } from "react";

const themes = {
  light: {
    color: "#ddd",
    background: "yellow",
  },
  dark: {
    color: "#fff",
    background: "#666",
    margin: "8px",
    padding: "8px",
    fontSize: "12px",
  },
};

const ThemeContext = React.createContext();

function TestContext() {
  return (
    <ThemeContext.Provider value={themes}>
      <Father></Father>
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          color: theme.dark.color,
          backgroundColor: theme.dark.background,
          margin: theme.dark.margin,
          padding: theme.dark.padding,
          fontSize: theme.dark.fontSize,
        }}
      >
        测试一下useContext
      </div>
      <div
        style={{
          color: themes.light.color,
          backgroundColor: themes.light.background,
          margin: themes.light.margin,
          padding: themes.light.padding,
          fontSize: themes.light.fontSize,
        }}
      >
        测试一下使用 light theme
      </div>
    </>
  );
}

function Father() {
  return (
    <div>
      <Child />
    </div>
  );
}
export default TestContext;
