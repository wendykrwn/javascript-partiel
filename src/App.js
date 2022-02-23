import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {
  const [items,setItems] = useState(["Salade", "Cornichon","Pain", "Lait", "Chips"])

  const listItems = <div>
    {
      items.map((item, index) => (
        <div key={index}>
          <input type="checkbox" id={index} name={index}/>
          <label for={index}>{item}</label>
        </div>
      ))
    }
  </div>

  return (
    <div className="">
      <h1>Liste de courses</h1>
      <form>
        {listItems}
      </form>
    </div>
  );
}

export default App;
