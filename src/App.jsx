import {useEffect, useState} from "react";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchItem from "./components/SearchItem";


function App() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);

    const [newItem, setNewItem] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        localStorage.setItem('shoppinglist', JSON.stringify(items));
    }, [items]);

    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const newItem = {
            id,
            checked: false,
            item
        };
        const listItems = [
            ...items,
            newItem
        ];
        setItems(listItems);
    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {
            ...item,
            checked: !item.checked
        } : item);
        setItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) 
            return;
        
        // addItem
        addItem(newItem);
        setNewItem('')
    }
    return (
        <div className="app">
            <Header title='Groceries'/>
            <AddItem newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}/>
            <SearchItem search={search}
                setSearch={setSearch}/>
            <Content items={
                    items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))
                }
                handleCheck={handleCheck}
                handleDelete={handleDelete}/>
            <Footer/>
        </div>
    );
}

export default App;
