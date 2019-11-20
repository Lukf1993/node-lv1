import React, { useState, useEffect }  from 'react';
import './lists.scss';
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
            <ul className='list'>
                {arr.map(item => (
                    <li className='list__item' key={item.id}>{item.name}</li>
               ))}
            </ul>
        </>
    )
}
export default Tripods;