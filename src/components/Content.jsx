import React, { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';

const Content = () => {
    const[items, setItems] = useState([
        {
            id: new Date().getTime(),
            checked: true,
            item: 'milch'
        },
        {
            id: (new Date().getTime()) * 2,
            checked: false,
            item: 'eggs'
        },
        {
            id: (new Date().getTime()) * 3,
            checked: false,
            item: 'sugar'
        }
    ]);

    const handleCheck = (id) =>{
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
        setItems(listItems)
    }
    
    return (
        <main>
            <ul >
                {
                    items.map(item =>(
                        <li 
                            key={ item.id }
                            className='item'
                        >
                                <input 
                                    type="checkbox" 
                                    checked={ item.checked }
                                    onChange={() => handleCheck(item.id) }
                                />
                                <label htmlFor="">{ item.item }</label>
                                <FaTrashAlt 
                                    role= "button" 
                                    tabIndex="0" 
                                />
                        </li>
                    ))
                }
                
            </ul>
        </main>
    )
}

export default Content
            

