import React from 'react';
import Cameras from '../components/Camera';
import Menu from '../components/Menu';

const ProductCamera = props => {
    return (
        <>
        <Menu />
        <h1>Kamery</h1>
        <Cameras />
        </>
    );
};

export default ProductCamera;