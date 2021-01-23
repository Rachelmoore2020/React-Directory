import React, {Component} from "react";
import "./styles.css";
import * as ReactBootStrap from "react-bootstrap";

class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    items:[],
    loading: false
  }
}

componentDidMount() {
  fetch("https://randomuser.me/api/?results=20")
  .then((response) => response.json())
  .then((response) => {
    this.setState({
      items:response.results,
      loading:true
    })
  })
}

render() {
    const {items,loading} = this.state

    if(!loading) {
      return (
        <div>Loading...</div>
      )
    }
    else{
    // return (
      let container= <div className="container">

      {items.map(item => (
        
        <tr key={item.md5}>
          <td><h4>{item.name.first} {item.name.last}</h4></td>
          <td><h4> {item.gender}</h4></td>
          <td><h4>{item.dob.age}</h4></td>
      </tr>
      
      ))}
      </div>
    // )
}
        return (
          <div className="App">
            {container}
        <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        </ReactBootStrap.Table>
          </div>
        )
        }

      }
        
      
export default App;