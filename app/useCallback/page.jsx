"use client";

import { useState } from 'react';
import ProductPage from './ProductPage.js';

/**
 * useCallback is a React Hook that lets you cache a function definition between re-renders.
 * useCallback(fn, dependencies) 
 * fn：想要缓存的函数。 
 * dependencies：有关是否更新 fn 的所有响应式值的一个列表。
 * 
 * useCallback 与 useMemo 有何关系？ 
 * useMemo 缓存函数调用的结果。useCallback 缓存函数本身。
 * useCallback 只应作用于性能优化
 */
export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
