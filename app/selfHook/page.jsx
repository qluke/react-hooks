"use client";
import React, { useState } from 'react';

function useChangeCount(init){
  // 自定义hook，名字必须以use开头
  const [count, setCount] = useState(init);
  const plus = () => {
    setCount(count + 1);
  }
  const minus = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(init);
  };
  
  return [count, {plus, minus, reset}];
}

function SelfHook(){
  const [count, setCount] = useChangeCount(0);
  return (
    <div>
      <p>当前count: {count}</p>
      <div><button onClick={setCount.plus}>增加</button></div>
      <div><button onClick={setCount.minus}>减少</button></div>
      <div><button onClick={setCount.reset}>重置</button></div>
    </div>
  )
}

export default SelfHook;
