"use client";

import { useState, useEffect } from "react";

/**
 * useState是React的内置函数，作用是让函数组件也可以维护自己的状态。这是一个管理状态的API。
 * 简单理解就是，useState是改变状态的开关，能够完成对状态的初始化、读取和更新。
 */
export default function App() {
  const [userName, setUserName] = useState("luke");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Varian", age: 18 });
  const [text, setText] = useState("hello");
  const [liked, setLiked] = useState(true);

  const onSetUserName = () => {
    setUserName("luke_luke");
    // 说明useState是异步的，不是立即更新的
    console.log("my new name:", userName);
  };

  const onSetUser = () => {
    // 想要原来的值，必须在 setX 里先进行复制
    // setUser({ name: "Janye" });
    setUser({ ...user, name: "Janye" });
  };

  function handleTexthange(e) {
    setText(e.target.value);
  }

  function handleLikedChange(e) {
    setLiked(e.target.checked);
  }
  // useEffect能够监听状态变化并执行回调函数。这里所说的“状态”变化，是指本次渲染(render)和上次渲染时的依赖(state)比较。
  useEffect(() => {
    console.log("my name update:", userName);
  }, [userName]);

  return (
    <>
      <div>my name: {userName}</div>
      <button onClick={onSetUserName}>update name</button>
      <hr />
      <div>
        <p>点击{count}次</p>
        <button onClick={() => setCount(count + 1)}>点击</button>
      </div>
      <hr />
      <div>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <button onClick={onSetUser}>Click</button>
      </div>
      <hr />
      <div>
        <input value={text} onChange={handleTexthange} />
        <p>You typed: {text}</p>
        <button onClick={() => setText("hello")}>Reset</button>
      </div>
      <hr />
      <div>
        <label>
          <input type="checkbox" checked={liked} onChange={handleLikedChange} />I
          liked this
        </label>
        <p>You {liked ? "liked" : "did not like"} this.</p>
      </div>
    </>
  );
}
