import { useState, useContext, useEffect, useMemo } from 'react'
import { cartContext } from '../../Context/cart-context';
import { wishContext } from '../../Context/wishlist-context'
import Wrapper from '../Layout/Wrapper';
import Dropdown from './Dropdown';
import CartModal from '../Modal/CartModal';
import WishlistModal from '../Modal/WishlistModal';
import style from './Navigation.module.css'
import './Nav.css'
import nav_poster_1 from '../../assets/img/nav--poster--1.jpeg'
import nav_poster_2 from '../../assets/img/nav--poster--2.jpeg'
import { FiShoppingCart } from "react-icons/fi";
import { TfiHeart } from "react-icons/tfi";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import Search from './Search';
import { Link } from 'react-router-dom';
import { userContext } from '../../Context/userContext';

export default function Navigation(props) {
    const [isPaintDropdown, setIsPaintDropdown] = useState(false)
    const [isDrawingDropdown, setIsDrawingDropdown] = useState(false)
    const [searchDropdown, setSearchDropdown] = useState(false)
    const cart_ctx = useContext(cartContext)
    const wish_ctx = useContext(wishContext)
    const user_utx=useContext(userContext)

    function setPaintings() {
        setIsPaintDropdown(!isPaintDropdown)
        setIsDrawingDropdown(false)
        setSearchDropdown(false)
    }
    function setDrawings() {
        setIsDrawingDropdown(!isDrawingDropdown)
        setIsPaintDropdown(false)
        setSearchDropdown(false)
    }
    function setSearch() {
        setSearchDropdown(!searchDropdown)
        setIsDrawingDropdown(false)
        setIsPaintDropdown(false)
    }
    useMemo(()=>{
        wish_ctx.displayWishlistItems();
        console.log(user_utx?.user?.role)
    },[wish_ctx.totalQuantity,user_utx.user])

    return (
        <>
            <header className='position-fixed w-100 shadow-lg'>
                <Wrapper class='container-fluid'>
                    <nav className="navbar navbar-expand-lg navbar-light position-relative">
                        <div className="container-fluid">
                            <Link to='/'><h1 className={style.navbar_brand}>-Art Corner-</h1></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                                <ul className={`navbar-nav mb-2 mb-lg-0 ${style.navbar}`}>
                                    <Link to='/collections'>
                                        <li className={`nav-item ${style.active}`}>
                                            all artwork
                                        </li>
                                    </Link>
                                    <li className="nav-item" onClick={setPaintings}>
                                        paintings
                                    </li>
                                    <li className="nav-item" onClick={setDrawings} >
                                        drawings
                                    </li>
                                    <li className="nav-item">
                                        blogs
                                    </li>
                                    {user_utx?.user?.role ==="Seller"&& <Link to='/sell-paintings'>
                                        <li className="nav-item">
                                            sell paintings
                                        </li>
                                    </Link>}
                                </ul>
                                <ul className={`navbar mb-2 mb-lg-0 ${style.nav_icons}`}>
                                    <h5 className='nav-item' onClick={setSearch}><BsSearch /></h5>
                                    <Link to='/profile'><h5 className='nav-item'><BiUser /></h5></Link>
                                    <h5 className={style.heart_svg} onClick={wish_ctx.ToggleFunction}><TfiHeart /><span>{wish_ctx?.totalQuantity||0}</span></h5>
                                    <h5 className={style.cart_svg} onClick={cart_ctx.ToggleFunction}><FiShoppingCart /><span>{cart_ctx.totalQuantity||0}</span></h5>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </Wrapper>
            </header>
            {isPaintDropdown && (
                <Dropdown src={nav_poster_1} menu='Paintings' menuList={['Laptops', 'Abstract Paintings', 'Cityscape Paintings', 'Landscape Paintings']} onClick={setPaintings} />
            )}
            {isDrawingDropdown && (
                <Dropdown src={nav_poster_2} menu='Drawings' menuList={['Sketch', 'Modern Drawings', 'Buddha Drawings']} onClick={setDrawings} />
            )}
            {searchDropdown && (
                <Search />
            )}
            {cart_ctx.modalIsOpen && (
                <CartModal />
            )}
            {wish_ctx.modalIsOpen && (
                <WishlistModal />
            )}
        </>
    )
}