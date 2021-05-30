import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/Sidebar.scss';

const Sidebar = () => {
    return (
        <div>
            <ul className="sideList">
                <Link to="/S/addbooks"><button>Add books</button></Link>
                <Link to="/S/bookissue"><button>Book issue</button></Link>
                <Link to="/S/calculate"><button>Calculate Fine</button></Link>
            </ul>
        </div>
    );
};

export default Sidebar;