import React, {useState} from 'react';
import '../scss/BookIssue.scss';

const Search = (props) => {
    const {setInput,setQuery, type} = props;
    const onChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <div className="searchBar">
            <h1>Search {type}</h1>
            <ul><input onChange = {onChange}></input>
            <button onClick={setQuery}>검색</button></ul>
        </div>
    );
};

export default Search;