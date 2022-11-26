import React,{Component,Fragment} from 'react';

class Header extends Component {

    constructor(){
      super()
      this.state = {
        title : 'React Application',
        keyword : 'User Text Here'
      }
    }
    handleChange = (event) => {
     console.log(event.target.value);
      (event.target.value ?this.setState({keyword:event.target.value}):this.setState({keyword:"User Text Here"}))
      this.props.userInput(event.target.value);
    }
    brandChange = (event) => {
    this.props.brandInput(event.target.value);
    } 
    render(){
    return(
        <Fragment>
           <header>
             <div className='logo'>{this.state.title}</div>
             <input onChange={this.handleChange}/>
             <input onChange={this.brandChange}/>
                <h1>React App</h1>
                <div style={{color:"black",fontSize:"20px"}}>{this.state.keyword}</div>           
           </header>
           <hr/>
        </Fragment>
    )
    }
}
export default Header;