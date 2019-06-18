import React, {Component} from 'react'

class Image extends Component{
    render(){
        return(
            <img src= {this.props.source} alt="hello there"></img>
        )
    }
}
export default Image