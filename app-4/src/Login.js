import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state ={
            username: '',
            password: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleUsername(userInput){
        this.setState( {username: userInput} )
    }
    handlePassword(pass){
        this.setState({password: pass})
    }
    handleClick(){
        alert(`Your Username: ${this.state.username} | Your Password:${this.state.password}`)
    }
    render(){
        return(
            <div>
                <input className="userNameBox" placeholder="username" onChange={ (e) => this.handleUsername(e.target.value) } type="text"></input>
                <input className="passwordBox" placeholder="password" onChange={(e) => this.handlePassword(e.target.value) } type="text"></input>
                <button className="alert" onClick={this.handleClick}>Login</button>
            </div>
        )
    }
}
export default Login