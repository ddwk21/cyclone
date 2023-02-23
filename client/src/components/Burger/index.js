import { slide as Menu } from 'react-burger-menu'
import  { Link } from 'react-router-dom'
import React from 'react';
console.log(Menu)

const Burger =({isOpen}) => {
    return (
      <Menu isOpen={ isOpen }>
          <Link to="/">Home</Link>
       </Menu>
    )
  }

export default Burger