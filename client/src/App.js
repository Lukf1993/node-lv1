import React from 'react';
import './App.css';
import Menu from './components/Menu';
import SearchBar from './components/SearchBar';
import axios from 'axios';


const App = () => {
  const [query, setQuery] = React.useState({
    value: '',
    debounce: null,
  });

  const [arr, setArr] = React.useState([]);

  const onChange = name => event => {
    if(query.debounce) {
      clearTimeout( query.debounce )
    }
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
  console.log(arr)
  return (
    <>
      <Menu />
      <SearchBar onChange={onChange} />
      {arr.map(item => (
        <ul>
          <li key={item.id}>{item.name}</li>
        </ul>
      ))}
    </>
  )
}

export default App;
