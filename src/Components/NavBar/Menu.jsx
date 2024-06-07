import 'bootstrap/dist/css/bootstrap.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import { useState } from 'react';


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
                <DropdownItem className='item'>Masculino</DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem className='item'>Femenino</DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem className='item'>Infantil</DropdownItem>
            </DropdownMenu>
        </Dropdown>
            

    )
}

export default Menu