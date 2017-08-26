import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Jumbotron, Button, Table } from 'react-bootstrap';

var axios = require('axios');

class LeaderBoard extends React.Component {

   constructor(props) {
        super(props)
      this.state = {
        name: [],
        active: false

         }

  this.allTimeClick = this.allTimeClick.bind(this);
  this.recentClick = this.recentClick.bind(this);
      }


  componentDidMount(){

      this.recentClick()

    }

  allTimeClick(){
axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime").then(res => {

  this.setState({name: res.data, active: true});
    });  }

recentClick(){
  axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent").then(res => {

this.setState({name: res.data, active: false});

    });
}

render () {
   const namesToRender = this.state.name.map(val => {
     return (
    <tr key={val.username}>  {val.username}</tr>

       )

   })

   const imgsToRender = this.state.name.map(val => {
     return (
    <tr key={val.username}><img src={val.img} height="18" alt={val.img}/></tr>

       )

   })

   const allTimeRender = this.state.name.map(val => {
     return (
       <tr key={val.username}> {val.alltime}</tr>

       )

   })

      const recentRender = this.state.name.map(val => {
     return (
       <tr key={val.username}> {val.recent}</tr>

       )

   })

    return (
      <div className="container">
        <center>
          <Jumbotron bsClass="jumbotron"><h1>FreeCodeCamp LeaderBoard</h1></Jumbotron>

        <Button bsClass={this.state.active ? 'btn active': 'btn'} onClick={this.allTimeClick} >
          Alltime</Button>
        <Button bsClass={this.state.active ? 'btn' : 'btn active'} onClick={this.recentClick} >Recent </Button>

            </center>
        <Table className="table table-bordered">
<thead>
  <tr><th>Username</th>
<th>Avatar</th>
  <th>Alltime Points <div className={this.state.active ? 'fa fa-arrow-up': 'fa fa-arrow-down'}></div></th>
 <th>Recent Points <div className={this.state.active ? 'fa fa-arrow-down': 'fa fa-arrow-up'}></div></th>
</tr>
</thead>
    <tbody>
        <td>{namesToRender}</td>
       <td>{imgsToRender}</td>
         <td>{allTimeRender}</td>
         <td>{recentRender}</td>

</tbody>

       </Table>

       </div>
      )
     }
}

/*ReactDOM.render(
  <LeaderBoard />, document.getElementById("app"));*/


export default LeaderBoard;



/* class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
} */
