import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';

const LineItem = ({ handleCheck, handleDelete, item }) => {
    return (
        <li key={
            item.id
        }
        className='item'>
        <input type="checkbox"
            checked={
                item.checked
            }
            onChange={
                () => handleCheck(item.id)
            }/>
        <label style={
                (item.checked) ? {
                    textDecoration: 'line-through'
                } : null
            }
            onDoubleClick={
                () => handleCheck(item.id)
        }>
            {
            item.item
        } </label>
        <FaTrashAlt onClick={
                () => handleDelete(item.id)
            }
            role="button"
            tabIndex="0"/>
    </li>
    )
}

export default LineItem
