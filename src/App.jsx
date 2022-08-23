import { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
    const [items, setItems] = useState([
        {
            id: new Date().getTime(),
            checked: true,
            item: 'milch'
        }, {
            id: (new Date().getTime()) * 2,
            checked: false,
            item: 'eggs'
        }, {
            id: (new Date().getTime()) * 3,
            checked: false,
            item: 'sugar'
        }
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {
            ...item,
            checked: !item.checked
        } : item);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }
    return (
        <div className="app">
            <Header title='Groceries'/>
            <Content 
              items={items}
              handleCheck={ handleCheck }
              handleDelete={ handleDelete }
            />
            <Footer />
        </div>
    );
}

export default App;
