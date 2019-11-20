 import React from 'react';
import './menu.scss';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
        <Link to={'/products/cameras'}><button className='menu__item'>Kamery</button></Link>
        <Link to={'/products/accessories'}><button className='menu__item'>Akcesoria</button></Link>
        <Link to={'/products/tripods'}><button className='menu__item'>Tripody</button></Link>
        <Link to={'/products'}><button className='menu__item'>Pokaż wszystko</button></Link>
        <Link to={'/'}><button className='menu__item'>Szukaj</button></Link>
        </div>
    )
}

export default Menu;