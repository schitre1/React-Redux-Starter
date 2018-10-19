import React, {Component} from 'react'; //needed for React.createElement when we use babel etc to compile to transalte jsx into html

class SearchBar extends Component { //or extends React.Component
    constructor(props){
        super(props);

        this.state = { term: ''};
    }
    
    render(){
        return (
            <div>    
                <input 
                value = {this.state.term}
                onChange={event => this.setState({term: event.target.value})}/>
                Value of the input is : {this.state.term}
            </div>
        );
    } 
    
    // render(){
    //     return <input onChange={this.onInputChange}/>; //property onChange
    // }
    // onInputChange(event){ //the event Object contains info about the event values
    //     console.log(event.target.value);
    // }


}

export default SearchBar;