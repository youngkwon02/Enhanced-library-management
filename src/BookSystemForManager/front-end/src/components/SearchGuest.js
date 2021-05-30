import React, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import Search from './Search';
import Guest from './guest.js';
import axios from '../../node_modules/axios/index';
import '../scss/ChooseList.scss';

const SearchGuest = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [guests, setGuests] = useState([]);
    const guestList = guests.map(guest =><Guest path={props.history.location.pathname} data={guest} key={guest.guestIdx}/>);
    const header = {
        headers: { "X-ACCESS-TOKEN" : cookies.token}
    }
    // useEffect(()=>{console.log(props)});
    const setter = () => {
        console.log(input);
        if(input !== '')
        setQuery((parseInt(input).toString() === input) ? '?ID='+input : '?name='+input);
    }
    useEffect(()=>{
        if(query !== '') {
            axios.get('/guests'+query, header).then(res=>{
                if(res.data.isSuccess) {
                    console.log(res);
                }
                alert(res.data.message);
                console.log(res.data.result);
                setGuests(res.data.result);     
            }).catch(err => {console.log(err)});
        }
    },[query]);
   
    return (
        <div className="List">
            <Search setInput={setInput} setQuery={setter} type="Guest"/>
            <ul>{guestList}</ul>
        </div>
    )
};

export default SearchGuest;