import React, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import BookReturn from './book_return.js';
import axios from '../../node_modules/axios/index';
import '../scss/ReturnBook.scss';

const ReturnBook = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const [guestBooks, setGbooks] = useState([]);
    const [returnBooks, setRbooks] = useState([]);
    const [postList, setPostList] = useState({
        guestIdx : props.location.aboutProps.id,
        returnBookList : []
    });
    const header = {
        headers: { "X-ACCESS-TOKEN" : cookies.token}
    };
    useEffect(()=>{
        axios.get("/issues/"+postList.guestIdx, header).then(res=>{
            alert(res.data.message);
            if(res.data.code === 200){
                props.history.push('/');
            }
            //console.log(res.data.result);
            setGbooks(res.data.result);
        }).catch(err => {console.log(err)});
    },[]);
    const AddRList = (book) => {
        const newGList = guestBooks.filter(item => item !== book);
        const newRList = returnBooks.concat(book);
        const newPList = postList.returnBookList.concat({
            issueIdx : book.issueIdx,
            bookIdx : book.bookIdx
        })
        setGbooks(newGList);
        setRbooks(newRList);
        setPostList({...postList, returnBookList : newPList});
    }
    const AddGList = (book) => {
        const newGList = guestBooks.concat(book);
        const newRList = returnBooks.filter(item => item !== book);
        console.log(book.issueIdx);

        console.log(postList.returnBookList);
        const arr = postList.returnBookList;
        console.log(arr);
        for(let i = 0;i<arr.length; i++) {
            if(arr[i].issueIdx === book.issueIdx)  {
              arr.splice(i, 1);
              break;
            }
        }
        setGbooks(newGList);
        setRbooks(newRList);
        setPostList({...postList, returnBookList : arr});
    }
    //const temp = searchBooks.filter(item => item.quantity > 0)
    const GbookList = guestBooks.map(book => <BookReturn data={book} setter={AddRList} type="G" key={book.issueIdx}/>);
    const RbookList = returnBooks.map(book => <BookReturn data={book} setter={AddGList} type="R" key={book.issueIdx}/>);

    const Return = () => {
        axios.post('/returns', postList, header).then(res=>{
            console.log(res);
            alert(res.data.message);
            props.history.push('/S');
        }).catch(err => {console.log(err)});
    }
    return (
        <ul className="BookSelect">
            <ul className="List">
                <ul>{GbookList}</ul>
            </ul>
            <ul className="RsideList">
                <h2>Returning List</h2>
                <ul>{RbookList}</ul>
                <button className="returnButton" onClick ={Return}> Return </button>
            </ul>
        </ul>
        
    );
};

export default ReturnBook;