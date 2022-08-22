import React, { useState } from 'react'

const Content = () => {
    const[items, setItems] = useState([
        {
            id: new Date().getTime(),
            checked: false,
            item: 'milch'
        },
        {
            id: new Date().getFullYear(),
            checked: false,
            item: 'eggs'
        },
        {
            id: new Date().getDay(),
            checked: false,
            item: 'sugar'
        }
    ]);
    
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
                                />
                                <label htmlFor="">{ item.item }</label>
                                <button>Delete</button>
                        </li>
                    ))
                }
                
            </ul>
        </main>
    )
}

export default Content
            

