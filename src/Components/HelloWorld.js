import React from 'react'

// function based component
function HelloWorld(props){
    return(
    <h1>Hello {props.name} from {props.city}</h1>
    )
}

// class based component
// class HelloWorld extends React.Component{
//     render(){
//         return(
//         <h1> Hello {this.props.name} from {this.props.city}</h1>
//         )
//     }
// }

export default HelloWorld