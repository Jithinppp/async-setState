import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    //if you want to use the props in the constructor use props arg as in both super and contructor
    //its not nessary to use constructor and  super to declate the state  if we need  propsthen its nessary

    this.state = {
      number: 20,
    };
  }

  HandleClick1 = () => {
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
    //this will be one behind the state to overcome this use a callback function in the setState
    //like this   this.setState({ number: this.state.number + 1 },()=> console.log(this.state.number));
    //this is also a bad practice becusereact doesn't guarentee the changes maybe sometimes
    //its  fine in the case of only  string operations like this.setState(number: 'strings')
  };

  //to overcome this issue use functions in the setState
  //example handleClick = ()=>{ this.setState((prevState,prevProps)=>(clg('anything'))) }

  HandleClick2 = () => {
    this.setState(
      (prevState, prevProps) => {
        return { number: prevState.number + prevProps };
        //this prevState will give the state value and this prevProps give props from the upper node
      },
      () => {
        console.log(this.state.number);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.number}</p>

          <button onClick={this.HandleClick2}>update State</button>
        </header>
      </div>
    );
  }
}

export default App;
