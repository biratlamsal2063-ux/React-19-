import { useState } from 'react'
import { UserDetails } from './UserDetails';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UserDetails name="BIRAT LAMSAL" isOnline={true} />
      <UserDetails name="BINIT LAMSAL" isOnline={false} />
    </div>
  );
};

export default App
