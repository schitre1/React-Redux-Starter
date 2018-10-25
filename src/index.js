import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'ZZZ'; //Youtube search api key 

//Create a new Component, this component should produce some html
class App extends Component { //used new ES6 fat arrow function syntax
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
       this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term},  (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });  //same as this.setState({videos: videos});
        });
    }

    render(){
        const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300);
        //debounce will call the inner function once every 300 ms
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video= {this.state.selectedVideo}/>
                <VideoList
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>  //<div>Hi!</div> this is JSX; webpack and babel do some transpiling of the code to convert it to html
            );
    } 
    //it will eventually look different as html
    //JSX cannot be directly interpreted by the browser, we need webpack and babel to convert to vanilla JS and HTML
}

// Take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App/> , document.querySelector('.container')); //an instance of app
