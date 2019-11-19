import React, { useState, useEffect }  from 'react';
import axios from 'axios';


const Products = () => {

    const [arr, setArr] = useState([])

  function getProducts() {
    axios.get(`http://localhost:5000/api/products/category`)
      .then(res => {
        setArr(res.data.results);
        console.log(res.data.results)
      })
  }
  
//   function dynamicSort(property) {
//     return function(a, b) {
//         return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
//     }
//  }

//  arr.sort(dynamicSort('type'))

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

export default Products;