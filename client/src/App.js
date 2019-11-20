import React from 'react';
import './App.scss';
import Menu from './components/Menu';
import SearchBar from './components/SearchBar';
import axios from 'axios';


const App = () => {
  const [query, setQuery] = React.useState({
    value: '',
  });

  const [arr, setArr] = React.useState([]);

  const onChange = name => event => {
    setQuery({
      ...query,
      [name]: event.target.value,
    })
    getResult(event.target.value)
  }


  const getResult = query => {
    console.log(query.value)
      axios.get(`http://localhost:5000/api/products/category?name=${query}`)
      .then(res => {
        setArr(res.data.results);
      }) 
  }
  return (
    <>
      <Menu />
      <SearchBar onChange={onChange} />
      {arr.map(item => (
        <ul className='list'>
          <li className='list__item' key={item.id}>{item.name}</li>
        </ul>
      ))}
    </>
  )
}

export default App;
