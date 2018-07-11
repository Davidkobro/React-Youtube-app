import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        // whenever we have state we create new object
        //when user updates search, we record that change on term
        //we want term to be the value of the input
        // only in constructor do we change state unless using setState
        this.state = { term: ''};
    }
// control has value updated by state
    render() { 
        return (
            <div> 
                
                <input 
                    value = {this.state.term}
                    onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
   }   
}

export default SearchBar;