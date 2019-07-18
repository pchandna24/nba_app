import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Routes from './routes';


const App = () =>{
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )

} 

serviceWorker.register()


ReactDOM.render(<App />, document.getElementById('root'));

