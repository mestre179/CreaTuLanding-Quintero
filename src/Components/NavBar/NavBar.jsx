import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo'
import Menu from './Menu'

const NavBar = () => {
   
    return(
        <>
        <nav className='navbar'>
            <Logo>
            </Logo>
            <Menu>
            </Menu>
            <CartWidget>
            </CartWidget>
        </nav>
        </>
    )
}

export default NavBar