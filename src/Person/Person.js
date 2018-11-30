import React , {Component} from 'react';
import './Person.css'
// const person = (props)=>{
//     return(
    //     <div>
    //         <div className="Person"></div>
    //      <p onClick={props.click}>This is {props.name} and the age is {props.age}</p>
    //      <p>{props.children}</p>
    //      {props.name != "adnsd" && props.name != "sudrishya" &&
    //      <input type="text" onChange={props.nameClick}/>
    // }
    //      </div>
    // )
// };
class Person extends Component{
    
        state={
    
        }
        componentWillMount(){
            console.log("component will mount");
        }
        componentDidMount(){
            console.log("component did mount");
        }
        render() {
            console.log("render");
            return(
                <div>
                    <div className="Person"></div>
                        <p onClick={this.props.click}>This is {this.props.name} and the age is {this.props.age}</p>
                        <p>{this.props.children}</p>
                            {this.props.name != "adnsd" && this.props.name != "sudrishya" &&
                                <input type="text" onChange={this.props.nameClick}/>
                            }
                </div>
            )
            
        }   
}

export default Person;