import React, { useState, useEffect }  from 'react';
import axios from 'axios';

const Tripods = ({history}) => {

    let [arr, setArr] = useState([])

    function getTripods() {
        axios.get(`http://localhost:5000/api/products/tripods`)
          .then(res => {
            setArr(res.data.results);
          })
      }

    useEffect(() => {
        if ( arr.length === 0 ) {
            getTripods();
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
export default Tripods;