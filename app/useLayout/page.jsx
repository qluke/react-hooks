"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

export default function TestuseLayout() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const InputRef = useRef(null);
  useEffect(() => {
    console.log(InputRef, "start useEffect");
    document.title = `${count} times`;
    return () => {
      console.log(InputRef, "end useEffect");
      document.title = "remove";
    };
  });
  useLayoutEffect(() => {
    console.log(InputRef, "start useLayoutEffect");
    document.title = `${count} times`;
    return () => {
      console.log(InputRef, "end useLayoutEffect");
      document.title = "Layout remove";
    };
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>
        <input
          ref={InputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
    </div>
  );
}
