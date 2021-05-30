import React,{useState} from 'react';
import '../scss/BookIssue.scss';
import DetailedInfo from './DetailedInfo.js';

const Guest = (props) => {
    const {guestName,guestIdx,email,phoneNo,profileImageUrl,isOverdue} = props.data;
    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <React.Fragment>
        <div
            style={{cursor:"pointer"}}
            onClick={openModal}
            className="infoBox"
        >
            <img style={{height:'100%'}} src={profileImageUrl}/>
            <span>
                <div className="name">{guestName}</div>
                <div>{guestIdx}</div>
            </span>
            <span>
                <div>{phoneNo}</div>
                <div>{email}</div>
            </span>
        </div>
        <DetailedInfo
            open={ modalOpen }
            close={closeModal}
            id={guestIdx}
            header="Select this user?"
            pathname={props.path}
        >
            이름 : {guestName}<br/>
            ID : {guestIdx}<br/>
            연체여부 : {isOverdue}
           
        </DetailedInfo>
        </React.Fragment>
    );
};

export default Guest;