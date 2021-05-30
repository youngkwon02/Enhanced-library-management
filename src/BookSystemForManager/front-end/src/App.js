import React from 'react';
import { Route,Redirect} from 'react-router-dom';
import AddBooks from './components/AddBooks.js';
import Sidebar from './components/Sidebar.js';
import SearchGuest from './components/SearchGuest.js';
import SearchBook from './components/SearchBook.js';
import ReturnBook from './components/ReturnBook.js';
import SignIn from './SignIn.js';
import './scss/App.scss';


const App = () => {
 

  return (
    <div className="viewPos">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Route path="/" exact={true} component={SignIn}/>
      <Route path="/S" component={Sidebar}/>
      <body className="body">
        <Route path="/S/addbooks" exact={true} component={AddBooks}/>
        <Route path="/S/bookissue" exact={true} component={SearchGuest}/>
        <Route path="/S/bookissue/addbooks" exact={true} render={
          (props) => (props.location.aboutProps ? (<SearchBook {...props}/>) :
            (<Redirect to="/S/bookissue"/>))}/>
        <Route path="/S/calculate" exact={true} component={SearchGuest}/>
        <Route path="/s/calculate/returnbooks" exact={true} render={
          (props) => (props.location.aboutProps ? (<ReturnBook {...props}/>) :
            (<Redirect to="/S/calculate"/>))}/>
      </body>

    </div>
  );
};

export default App;