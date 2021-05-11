import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import AnimatedButton from './components/AnnimatedButton/AnnimatedButton'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={text:"hello", counter:0};
  }
  
  componentDidUpdate() {
    console.log('updated: ',  this.state);
  }

  componentDidMount() {
    this.setState({text:'je suis monté'})
    console.log('mounted')
  }

  render() {
    return <div className="app">
      <Button title="Cliquez ici" action={()=>{
        this.setState({counter:this.state.counter+1});
      }}/>
      <AnimatedButton title="Animated" action={() => console.log('hello')}/>
      {JSON.stringify(this.state)}
    </div>
  }
}

export default App;
