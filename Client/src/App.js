import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import axios from 'axios';
class App extends Component {
  state={
    text:""
  }
  handleAdd= async e=>{
    await this.setState({
      text: e.target.value
    })
  }
  handleSubmit= e=>{
    e.preventDefault();
    console.log(this.state.text);
    let formData= new FormData();
    formData.append("text", this.state.text);
    const url= "http://localhost:80/Projects%20V3/PHP%20React/";
    axios.post(url,formData)
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err));  
  }
  render() {
    return (
      <div className="App">
      <header className="App-header" style={{alignItems:"center", backgroundColor:"white", color:"black"}}>
        <input onChange={this.handleAdd} type="text" id="text" placeholder="Enter Your Message" style={{borderColor:"grey", margin:"0.5%"}}/>
        <button onClick={this.handleSubmit} type="submit" id="save" style={{borderColor:"grey", borderRadius:"10px"}}>Submit</button>
      </header>
    </div>
    );
  }
}

export default App;
