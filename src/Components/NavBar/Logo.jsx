import Virtgold from '../../../src/assets/logo.png'
import './NavBar.css'
import { Link } from 'react-router-dom'


const Logo = () => { 
return (
    <div  className='logo'>
        <Link to="/">
            <img src= {Virtgold} alt="Virtgold Logo" />
        </Link>
    </div>
)
}

export default Logo