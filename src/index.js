import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'XXXX'; //Youtube search api key 

//Create a new Component, this component should produce some html
const App =  () => { //used new ES6 fat arrow function syntax
    return (
    <div>
        <SearchBar/>
    </div>  //<div>Hi!</div> this is JSX; webpack and babel do some transpiling of the code to convert it to html
    );
    //it will eventually look different as html
    //JSX cannot be directly interpreted by the browser, we need webpack and babel to convert to vanilla JS and HTML
}

// Take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App/> , document.querySelector('.container')); //an instance of app
