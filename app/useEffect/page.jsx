"use client";
import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

/**
 * useEffect is a React Hook that lets you synchronize a component with an external system.
 * 你需要向 useEffect 传递两个参数：
 * 一个 setup 函数 ，其 setup 代码用来连接到该系统。它应该返回一个清理函数（cleanup），其 cleanup 代码用来与该系统断开连接。
 * 一个 依赖项列表，包括这些函数使用的每个组件内的值。
 * 
 * React 在必要时会调用 setup 和 cleanup，这可能会发生多次：
 * 将组件挂载到页面时，将运行 setup 代码。
 * 重新渲染依赖项变更的组件后：首先，使用旧的 props 和 state 运行 cleanup 代码。然后，使用新的 props 和 state 运行 setup 代码。
 * 当组件从页面卸载后，cleanup 代码 将运行最后一次。 
 */
function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
