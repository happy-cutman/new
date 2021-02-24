import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Board from './containers/Board/Board';
import MyAdverts from './containers/MyAdverts/MyAdverts';
import NewAdvert from './components/NewAdvert/NewAdvert';
import EditAdvert from './components/EditAdvert/EditAdvert';
import CreateAdvert from './containers/CreateAdvert/CreateAdvert';
import MyTrades from './containers/MyTrades/MyTrades';
import NewTrade from './components/NewTrade/NewTrade';
import MyChats from './containers/MyChats/MyChats';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/' component={Board} exact/>
                    <Route path='/my-adverts' component={MyAdverts} exact/>
                    <Route path='/create-advert' component={CreateAdvert} exact/>
                    <Route path='/my-trades/open' component={MyTrades} exact/>
                    <Route path='/my-trades/closed' component={MyTrades} exact/>
                    <Route path='/my-trades/new-trade' component={NewTrade} exact/>
                    <Route path='/my-chats/about-my-ads' component={MyChats} exact/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
