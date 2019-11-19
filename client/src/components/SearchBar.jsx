import React from 'react';

const SearchBar = props => {
    return (
        <>
            <input type="text" placeholder="szukaj" onChange={props.onChange('value')} />
        </>
    )
}
export default SearchBar;