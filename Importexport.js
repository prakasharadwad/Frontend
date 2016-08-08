import React from 'react'//import react from another react file
import ReactDom from 'react-dom'

const App=function(){
return <div>Hi1</div>;//jsx code
}


ReactDom.render(<App/>,document.getElementById('app'));
//first: instantiated comp
//second: dom node in actual html
//export default App; export react function
//
/*
2 variable to declare in es6
const
let

*/
