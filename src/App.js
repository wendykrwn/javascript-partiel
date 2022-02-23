import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {
  const [items,setItems] = useState(["Salade", "Cornichon","Pain", "Lait", "Chips"])

  const listItems = <div>
    {
      items.map((item,index) => <div key={index}>{item}</div>)
    }
  </div>
  
  return (
    <div className="">
      <h1>Liste de courses</h1>
      {listItems}
    </div>
  );
}

export default App;
