import React, { useState, useEffect }  from 'react';
import './lists.scss';
import axios from 'axios';


const Cameras = () => {

    const [arr, setArr] = useState([])

    function getProducts() {
        axios.get(`http://localhost:5000/api/products/camera`)
          .then(res => {
            setArr(res.data.results);
          })
      }


    useEffect(() => {
        if ( arr.length === 0 ) {
            getProducts();
        }
    })
    

    return(
        <>
            <ul className='list'>
                {arr.map(item => (
                    <li className='list__item' key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Cameras;