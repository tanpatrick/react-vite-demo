import { useState } from 'react';

export const Counter = ({ initialCount = 0 }: { initialCount?: number }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <div>
        <label data-testid="count">
          Count is <strong>{count}</strong>
        </label>
      </div>
      <div className="button-group">
        <button onClick={() => (count <= 1 ? count : setCount((count) => count - 1))}>Decrement</button>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      </div>
    </div>
  );
};
