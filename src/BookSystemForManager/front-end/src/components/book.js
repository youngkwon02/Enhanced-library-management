import React,{useState} from 'react';
import '../scss/BookIssue.scss';

const Book = (props) => {
    const {data, setter, type} = props;
    const {bookIdx, bookTitle, author, bookCoverImageUrl, category, quantity} = data;

    const onClick = () => {
        console.log(data);
        setter(data);
    }
    return (
        <div
            style={{cursor:"pointer"}}
            className="infoBox"
            onClick={onClick}
        >
            <img style={{height:'100%'}} src={bookCoverImageUrl}/>
            <div className="Bbody">
                <span className="Up_span">
                    <span className="In_span">
                        <div className="title">{bookTitle}</div>
                        {type === "S" ? <div>남은 수량 : {quantity}권</div> : <div></div>}
                    </span>
                    <div>{author}</div>
                </span>
                <div className="pos">위치 : {category}</div>
            </div>

        </div>
        
    );
};

export default Book;