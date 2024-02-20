"use client";

import { useState, useEffect } from "react";

/**
 * useState是React的内置函数，作用是让函数组件也可以维护自己的状态。这是一个管理状态的API。
 * 简单理解就是，useState是改变状态的开关，能够完成对状态的初始化、读取和更新。
 */
export default function App() {
  const [userName, setUserName] = useState("luke");

  const onSetUserName = () => {
    setUserName("luke_luke");
    // 说明useState是异步的，不是立即更新的
    console.log("my new name:", userName);
  };

  // useEffect能够监听状态变化并执行回调函数。这里所说的“状态”变化，是指本次渲染(render)和上次渲染时的依赖(state)比较。
  useEffect(() => {
    console.log("my name update:", userName);
  }, [userName]);

  return (
    <>
      <div>my name: {userName}</div>
      <button onClick={onSetUserName}>update name</button>
    </>
  );
}
