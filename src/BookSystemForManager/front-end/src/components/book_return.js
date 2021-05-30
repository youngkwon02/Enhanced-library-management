import React,{useState} from 'react';
import '../scss/ReturnBook.scss';

const BookReturn = (props) => {
    const {data, setter, type} = props;
    const {issueIdx, guestIdx, guestName, bookIdx, bookTitle, author, issuePeriod, overdueStatus,calculatedFine} = data;

    const onClick = () => {
        console.log(data);
        setter(data);
    }
    return (
        <div
            style={{cursor:"pointer"}}
            className="r_infoBox"
            onClick={onClick}
        >
            <div className="up_span">
                <span>
                    <div className="name">{bookTitle}</div>
                    <div>{author}</div>
                </span>
                <span>
                    <div>연체여부 : {overdueStatus}</div>
                    <div>연체료 : {calculatedFine}원</div>    
                </span>
            </div>
            <div>
                대출기간 : {issuePeriod}
            </div>
        </div>
        
    );
};

export default BookReturn;