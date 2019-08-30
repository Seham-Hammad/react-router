import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Conatact';
import About from './components/About';
import Error from './components/Error';
import Nav from './components/Nav';
import UserForm from './components/UserForm';
import "./App.css";
import axios from 'axios';

class App extends React.Component {
  
  state= {
    repos: null
  }

  getUser = (e) => {
  
    e.preventDefault();
    const user = e.target.elements.username.value;
    if(user){
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({
          repos: repos
        })
        console.log(res);
        console.log(repos)
      })
    } else return;   
  }
  render(){
    return (  
    
     <BrowserRouter>
       <div className="App">
         <header className="App-header">
           <h1>React Router and Axios Tutorial...</h1>
         </header>
             <Nav />
             <UserForm getUser={this.getUser} />
              {this.state.repos ? <p>Number of repos: {this.state.repos}</p> :
              <p>Please enter username!</p>}
             <Switch>
                <Route path='/'          component={Home} exact />
                <Route path='/about'     component={About} />
                <Route path='/contact'   component={Contact} />
                
                <Route component={Error} />
            </Switch>
           
        </div>
       
     </BrowserRouter>
    );
  }
  
}

export default App;

/**this code is equal to the use of if{} but we can not use plain javascript code inside jsx, we use 
 * ternary operator
 * {this.state.repos ? <p>Number of repos: {this.state.repos}</p> :
              <p>Please enter username!</p>}


if (this.state.repos){
  <p>Number of repos: {this.state.repos}</p>
} else{
  <p>Please enter a username!</p>
}
*/



