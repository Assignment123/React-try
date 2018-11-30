import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Sumina from './Person/Person';
import Menu from './Menu/Menu';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react'

class App extends Component {
  state={
    person:[
      {name:"sudrishya", age:20},
      {name:"astha", age:22},
      {name:"adnsd", age:26}
    ],
    otherState :'sfhb'
  }
  clickMeHandler =(newName)=>{
    // console.log('jsdjnc');
      this.setState({
        person:[
          {name:newName, age:20},
          {name:"astha", age:22},
          {name:"adnsd", age:246}
        ]
      })

  }
  namechangeHandler =(event)=>{ debugger
    this.setState({
      person:[
        {name:"sudrishyasen",age:20},
        {name:event.target.value,age:22},
        {name:"sumina",age:22}
      ]
    })
  }
  render() {

    const Home=()=>(
      <div>Home
        <h1>HI, this is the react app</h1>
        <Menu/>
        <h2>Hello Everyone</h2>
        <p>This is working!</p>
        <button onClick={() =>this.clickMeHandler.bind(this,'sudrishaysg')}>Click Me</button>
        <Sumina 
        name ={this.state.person[0].name} 
        age={this.state.person[0].age}
        click={this.clickMeHandler.bind(this,'fgsdvh')}
        > My Hobbies: dancing</Sumina>
      </div>
    )
    const About=()=>(
      <div>About
         <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
      </div>
    )

    return (
      <div className="App">
        
         <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" target="_bank">About</Link>
          </li>
          {/* <li>
            <Link to="/topics">Topics</Link>
          </li> */}
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
        

        

      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work?'));
  }
}

export default App;
