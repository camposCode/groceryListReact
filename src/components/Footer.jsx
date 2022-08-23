import React from 'react'

const Footer = ({ length }) => {
    const today = new Date();
    return (
        <footer className='footer'>
            <p>José A. Campos / Copyright &copy; { today.getFullYear() }</p>
        </footer>
    )
}

export default Footer
