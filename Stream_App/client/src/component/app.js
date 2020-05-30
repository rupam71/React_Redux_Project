import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import streamList from './stream/streamList';
import StreamCreate from './stream/streamCreate';
import StreamEdit from './stream/streamEdit';
import StreamDelete from './stream/streamDelete';
import StreamShow from './stream/streamShow';
import Header from './header';
import history from './../history';

// we use <BrowserHisory> when we use default history
// here we are using our own history 
// so we use <Router> tag,
// and pass our previos made history as props

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='ui container'>
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={streamList} />
                            <Route path="/streams/new" exact component={StreamCreate} />
                            <Route path="/streams/edit/:id" exact component={StreamEdit} />
                            <Route path="/streams/delete/:id" exact component={StreamDelete} />
                            <Route path="/streams/:id" exact component={StreamShow} />
                        </Switch>
                    </div>
                </Router>
            </div>
         );
    }
}

// in edit "/:id" actuly make a props name id
// by using ':' we pass props to <StramEdit>
// we will find it in props.params.match.id
 
export default App;