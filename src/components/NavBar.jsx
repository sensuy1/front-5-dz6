import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='products'>
                        Товары
                    </Link>
                </li>
                <li>
                    <Link to='cart'>
                        Корзина
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar