import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'
import AddItem from './AddItem';
function App() { 

  const [items, setItems] = useState(
    [
      {
        id : 1,
        item : 'learn react',
        checked: true
      },
      {
        id : 2,
        item : 'learn spring Boot',
        checked: false
      },
      {
        id : 3,
        item : 'learn Spring Securiy',
        checked: true
      }
    ]
  );

  const [newItem, setNewItem] = useState('')

  const handleEvent = (id) =>{
    const arr = items.map((item)=>(item.id===id) ? {...item,  checked: !item.checked} : item)
    setItems(arr)
  }

  const handleDelete = (id) =>{
    const arr = items.filter((item)=> item.id!==id)
    setItems(arr)
    localStorage.setItem("todo_list", JSON.stringify(arr))
  }

  const handleSubmit = (e) =>{ 
    e.preventDefault()
    console.log('submitted');
  }

  return (
    <div className="App">
      <Header /> 
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      submit={handleSubmit}
      />
      <Content 
      items={items}
      handleEvent ={handleEvent}
      handleDelete={handleDelete}
      />      
      <Footer 
      item = {items.length}
      />      
    </div>
  );
}

export default App;
