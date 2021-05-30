import React, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import Book from './book.js';
import Search from './Search.js';
import axios from '../../node_modules/axios/index';
import {FormControl, FormLabel, FormControlLabel, Radio, RadioGroup}from '@material-ui/core';
import '../scss/ChooseList.scss';

const SearchBook = (props) => {
    const [method,setMethod] = useState('a');
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [searchBooks, setSbooks] = useState([]);
    const [issueBooks, setIbooks] = useState([]);
    const [postList, setPostList] = useState({
        guestIdx : props.location.aboutProps.id,
        issueBookList : []
    });
    const header = {
        headers: { "X-ACCESS-TOKEN" : cookies.token}
    };
    useEffect(()=>{
        if(query !== '') {
            const temp = (method === 'a') ? '/books?author=' : '/books?title=';
            axios.get(temp+query, header).then(res=>{
                if(res.data.isSuccess) {
                    console.log(res);
                }
                alert(res.data.message);
                if(res.data.code === 200){
                    props.history.push('/');
                }
                console.log(res.data.result);
                setSbooks(res.data.result);
                setQuery('');
            }).catch(err => {console.log(err)});
        }
    },[query]);
    const setter = () => {
        setQuery(input);
    }
    const AddIList = (book) => {
        const newSList = searchBooks.map(item => item === book ? {...item, quantity : item.quantity-1}:item);
        const newIList = issueBooks.concat({...book,quantity:1});
        const newPList = postList.issueBookList.concat({bookIdx : book.bookIdx})
        setSbooks(newSList);
        setIbooks(newIList);
        setPostList({...postList, issueBookList : newPList});
    }
    const AddSList = (book) => {
        const newSList = searchBooks.map(item => item.bookIdx === book.bookIdx ? {...item, quantity : item.quantity+1}:item);
        const newIList = issueBooks.filter(item => item !== book);
        const arr = postList.issueBookList;
        const length = arr.length;
        for(let i = 0;; i++) {
            if(arr[i].bookIdx === book.bookIdx)  {
              arr.splice(i, 1);
              break;
            }
        }
        setSbooks(newSList);
        setIbooks(newIList);
        setPostList({...postList, issueBookList : arr});
    }
    const temp = searchBooks.filter(item => item.quantity > 0)
    const SbookList = temp.map(book => <Book data={book} setter={AddIList} type="S"/>);
    const IbookList = issueBooks.map(book =><Book data={book} setter={AddSList} type="I"/>);
    const handleChange= (e) => {
        setMethod(e.target.value);
    }
    const Issue = () => {
        axios.post('/issues', postList, header).then(res=>{
            console.log(res);
            alert(res.data.message);
            props.history.push('/S');
        }).catch(err => {console.log(err)});
    }
    return (
        <ul className="BookSelect">
            <ul className="List">
                <Search setInput={setInput} setQuery={setter} type="Book"/>
                <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                    <RadioGroup value={method} aria-label="Method" name="gender1" onChange={handleChange} row >
                    <FormControlLabel value="a" control={<Radio />} label="작가로 검색" />
                    <FormControlLabel value="t" control={<Radio />} label="제목으로 검색" />
                </RadioGroup>
                </FormControl>
                <ul className="LList">{SbookList}</ul>
            </ul>
            <ul className="RsideList">
                <h2>Issuing List</h2>
                <ul>{IbookList}</ul>
                <button className="issueButton" onClick ={Issue}> Issue </button>
            </ul>
        </ul>
        
    );
};

export default SearchBook;