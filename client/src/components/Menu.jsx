import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <>
        <Link to={'/products/cameras'}><button>Kamery</button></Link>
        <Link to={'/products/accessories'}><button>akcesoria</button></Link>
        <Link to={'/products/tripods'}><button>tripody</button></Link>
        <Link to={'/products'}><button>Pokaż wszystko</button></Link>
        <button>sortuj po typie</button>
        </>
    )
}

export default Menu;