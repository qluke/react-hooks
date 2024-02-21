"use client";

import React, { useState, useMemo } from "react";

/**
 * useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
 * useMemo(calculateValue, dependencies) 
 * calculateValue：要缓存计算值的函数。
 * dependencies：所有在 calculateValue 函数中使用的响应式变量组成的数组。
 */
function TestUseMemo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  // 跳过代价昂贵的重新计算
  const AddSum = useMemo(() => {
    console.log("count 值改变");
    let sum = count;
    for (let i = 0; i < count * 1000; i++) {
      sum += i;
    }
    return sum;
  }, [count]); // 只在count值发生变化时才重新计算值
  return (
    <div>
      <p>点击了{count}次</p>
      <p>计算求和所得{AddSum}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <input value={value} onChange={(event) => {
        setValue(event.target.value);
        console.log("value 值改变");
      }
      } />
    </div>
  );
}

export default TestUseMemo;
