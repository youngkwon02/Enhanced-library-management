import React, {useState} from 'react';
import {useCookies} from 'react-cookie';
import '../scss/Addbooks.scss';
import axios from '../../node_modules/axios/index';
import base64 from 'base-64';

const AddBooks = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [resData, setResData] = useState('');
    const [data,setData] = useState({
        title : '',
        author : '',
        description : '',
        bookCoverImageUrl: '',
        eBookFileUrl : '',
        category : '',
        quantity : 0,
        previewURL : ''
    });
    const header = {
        headers: { "X-ACCESS-TOKEN" : cookies.token }
    }
    const inputChange = e => {
        const nextForm = {
            ...data,
            [e.target.name] : e.target.value
        };
        setData(nextForm);
    }
    const setCover = e => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        let enc = base64.encode(file)
        console.log(enc);
        reader.onloadend = () => {
            const nextFile = {
                ...data,
                bookCoverImageUrl : enc,
                previewURL : reader.result
            }
            setData(nextFile);
            const tFile = base64.decode(enc);
            console.log(tFile);
            //console.log(reader.readAsDataURL(tFile));
        }
        reader.readAsDataURL(file);
    }
    const setEbook = e => {
        let enc = base64.encode(e.target.files[1]);
        const nextForm = {
            ...data,
            eBookFileUrl : enc
        };
        setData(nextForm);
    }
    const onClick = async () => {
        
        console.log(data);
        if(data.title && data.author && data.bookCoverImageUrl && data.quantity) {
            axios.post('/books', data, header).then(res=>{
                setResData(res);
                console.log(res);
                alert(res.data.isSuccess ? '성공' : '로그인 필요')
            }).catch(err => {console.log(err)});
        }
        else {
            alert("필수 입력란이 비어있습니다");
        }
    };
    return (
        <div className="AddBooks">
            <h1>Add Book</h1>
            <ul className="viewList">

                <li>
                    <span>Title</span>
                    <input name="title" onChange={inputChange}/>
                </li>
                <li>
                    <span>Author Name</span>
                    <input name="author" onChange={inputChange}/>
                </li>
                <li>
                    <span>Description</span>
                    <input name="description" onChange={inputChange}/>
                </li>
                <li>
                    <span>Cover Page</span>
                    <input
                        type='file'
                        accept='.png,.jpg'
                        onChange={setCover.bind(this)}/>

                </li>
                <li>
                    <img src={data.previewURL} width='150px'></img>
                </li>
                <li>
                    <span>E-book File</span>
                    <input type="file" accept='.pdf' onChange={setEbook.bind(this)}/>

                </li>
                <li>
                    <span>Position</span>
                    <input name="category" onChange={inputChange}/>
                </li>
                <li>
                    <span>Quantity</span>
                    <input name="quantity" onChange={inputChange}/>
                </li>
            </ul>
            <button className="Add" onClick={onClick}>Add</button>
        </div>
    );
};

export default AddBooks;