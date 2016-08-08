/* eslint-disable no-console */
//console.log('hi');
//import React from 'react'//import react from another react file
//import ReactDom from 'react-dom'



import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Search';
/*
const App=function(){
return <div>Hi!
<SearchBar/> sfdg</div>;//jsx code
}*/

class App extends Component{
  render(){
    return(
      <div>

        <SearchBar/> sfdg
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
