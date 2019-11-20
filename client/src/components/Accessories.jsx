import React, { useState, useEffect }  from 'react';
import './lists.scss';
import axios from 'axios';


const Accessories = () => {

    let [arr, setArr] = useState([])

    function getAccessories() {
        axios.get(`http://localhost:5000/api/products/accessorie`)
          .then(res => {
            setArr(res.data.results);
          })
      }

    useEffect(() => {
        if( arr.length === 0 ) {
            getAccessories();
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

export default Accessories;