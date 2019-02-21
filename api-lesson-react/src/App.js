import React, { Component } from 'react';
import './App.css';

class App extends Component {
 state = {
    name: '',
    address: '',
    phone: ''
  }
  handleSubmit = e => {
    e.preventDefault()
    const data = JSON.stringify({ ...this.state  })
    fetch('HTTP://localhost:4000', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <h1>React Address Book</h1>
        <form onSubmit={this.handleSubmit}>
        <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name"
     onChange={e => this.setState({ name : e.target.value})}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Address</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address"
    onChange={e => this.setState({ address : e.target.value})}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phone</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone"
     onChange={e => this.setState({ phone : e.target.value})}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    );
  }
}

export default App;
