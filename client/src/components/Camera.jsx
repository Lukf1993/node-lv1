import React, { useState, useEffect }  from 'react';
import axios from 'axios';


const Cameras = () => {

    const [arr, setArr] = useState([])

    function getProducts() {
        axios.get(`http://localhost:5000/api/products/camera`)
          .then(res => {
            setArr(res.data.results);
            console.log(res.data.results)
          })
      }


    useEffect(() => {
        if ( arr.length === 0 ) {
            getProducts();
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

export default Cameras;