import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route ,Link} from 'react-router-dom';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';



class App extends Component{

  render(){
    return(
     <Router>
       <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">React  Library App</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav=item"><Link to={'/'} className="nav-link">Home</Link></li>
              <li className="nav=item"><Link to={'/create'} className="nav-link">Create</Link></li>
              <li className="nav=item"><Link to={'/index'} className="nav-link">Views</Link></li>
            </ul>
          </div>
         </nav><br/>
         <h2>Welcome to  Library</h2>
         <p>A library is a place where many books are kept. Most libraries are public and let people take the books to use in their home. Most libraries let people borrow books for several weeks. Some belong to institutions, for example, companies, churches, schools, and universities. Also a person's bookshelves at home can have many books and be a library. The people who work in libraries are librarians. Librarians are people who take care of the library.</p>
         <Switch>
           <Route exact path ='/create' component={Create}></Route>
           <Route exact path ='/edit:id' component={Edit}></Route>
           <Route exact path ='/index' component={Index}></Route>
         </Switch>
       </div>
     </Router>
    );
  }
}

export default App;