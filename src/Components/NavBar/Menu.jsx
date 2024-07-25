import 'bootstrap/dist/css/bootstrap.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {  
    const [dropwdown, setDropdown]= useState(false)
        
        const abrircerrardropdown=() => {
        setDropdown (!dropwdown) 
        }
    
    return (
             
        <Dropdown isOpen={dropwdown} toggle={abrircerrardropdown}>
            <DropdownToggle caret className='drop'> 
                 Acciones
            </DropdownToggle>

            <DropdownMenu>
                <DropdownItem className='item'>
                    <Link to='/categorias/World of Warcraft'>World of Warcraft</Link>
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem className='item'>
                    <Link to='/categorias/Runescape'>Runescape</Link>
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem className='item'>
                    <Link to='/categorias/Albion'>Albion</Link>
                </DropdownItem>
           
            </DropdownMenu>
        </Dropdown>
            

    )
}

export default Menu