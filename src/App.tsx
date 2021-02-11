import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Board from './containers/Board/Board';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Board/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
