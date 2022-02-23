import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {
  const [items,setItems] = useState([])
  const [newItem, setNewItem] = useState("")

  const listItems = <div>
    {
      items.map((item, index) => (
        <div key={index}>
          <input type="checkbox" id={index} name={index}/>
          <label htmlFor={index}>{item}</label>
        </div>
      ))
    }
  </div>

  const handleChange = (event) => {
    setNewItem(event.target.value)
  }

  const handleSubmit = (event) => {
    if (newItem) {
      setItems(
        [...items, newItem]
      )
    }
    event.preventDefault()
  }

  return (
    <div className="">
      <h1>Liste de courses</h1>
      <form onSubmit={handleSubmit}>
        {listItems}
        <div>
          <p>Ajouter un nouvel item à la liste : </p>
          <textarea value={newItem} onChange={handleChange} id="addItem" name="addItem" rows="5" cols="33"/>
        </div>
        <div>
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  );
}

export default App;
