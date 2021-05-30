import React from 'react';
import {Link} from 'react-router-dom';
import "../scss/DetailedInfo.scss";

const DetailedInfo = (props) => {
    const { open, close, id, header, pathname } = props;
    const path = (pathname === '/S/bookissue')?'/S/bookissue/addbooks':'/s/calculate/returnbooks';
    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
        { open ? (  
            <section>
                <header>
                    {header}
                    <button className="close" onClick={close}> &times; </button>
                </header>
                <main>
                    {props.children}
                </main>
                <footer>
                    <Link to= {{
                        pathname: path,
                        aboutProps:{
                            id: id
                        }}
                    }>
                    <div className="close"> Select </div></Link>
                </footer>
            </section>
        ) : null }
    </div>
    );
};

export default DetailedInfo;