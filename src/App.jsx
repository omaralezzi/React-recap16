import { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');

  //Declare your references using useRef
  const inputRef = useRef();
  const h1Ref = useRef();
  const countRef = useRef(1);

  //Use effects to manipulate your dom elements
  useEffect(() => {
    inputRef.current.focus();
    h1Ref.current.className = 'h1';
  }, []);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  }, [name]);

  return (
    <main>
      {/* Link your references with the ref keyword */}
      <h1 ref={h1Ref}>Welcome to React</h1>
      <input
        ref={inputRef}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
      <p>The input has been rendered {countRef.current} times</p>
    </main>
  );
};

export default App;
