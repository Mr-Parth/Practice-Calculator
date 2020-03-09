import React, {Component} from 'react';
import Calcualtor from './components/calulator'
import Result from './components/result'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      result: ''
    }
  }

  onClick = (e) => {
    let value = e.currentTarget.textContent;
    if(value === '='){
      this.calulate()
    }
    else{
      this.setState({result:this.state.result+value})
    }
  }

  calulate = () => {
    if (this.state.result.length > 0){
      this.setState({result:eval(this.state.result)})
    }
  }
  
  reset = () => {
    this.setState({result: ''})
  }

  render() {
    return (
    <div className="calculator">
      <Result result={this.state.result}/>
      <Calcualtor onClick={this.onClick} reset={this.reset}/>
    </div>
    );
    }
}

export default App;
