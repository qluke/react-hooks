"use client";

import React, { useRef } from "react";

/**
 * useRef返回一个可变的ref对象，该对象只有一个current属性，初始值为传入的参数(initialValue)，并且返回的ref对象在组件的整个生命周期内保持不变。
 * useRef是来解决如下问题的：
 * □获取子组件或者DOM节点的实例对象；
 * □存储渲染周期之间的共享数据。
 */
export default function TestUseRef() {
  // const InputEl = React.createRef(null);
  const InputEl = useRef(null);
  const getInputFocus = () => {
    InputEl.current.placeholder = "输入中";
    InputEl.current.focus();
  };
  return (
    <div>
      <input ref={InputEl} type="text" placeholder="请输入" />
      <button onClick={() => getInputFocus()}>测试useRef</button>
    </div>
  );
}
