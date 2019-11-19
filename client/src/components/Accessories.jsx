import React, { useState, useEffect }  from 'react';
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
        {arr.map(item => (
            <ul>
                <li key={item.id}>{item.name}</li>
            </ul>
        ))}
        </>
    )
}

export default Accessories;