import React from 'react';
import './searchBar.scss';

const SearchBar = props => {
    return (
        <>
            <input className="searchBar" type="text" placeholder="szukaj" onChange={props.onChange('value')} />
        </>
    )
}
export default SearchBar;