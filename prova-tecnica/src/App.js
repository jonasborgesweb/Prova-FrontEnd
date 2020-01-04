import React, {Component} from 'react';
import './App.css';

//Importando o Card
import Card from './components/card'

//Importando a Lista
import ListData from './data/lista.json'

class App extends Component{

  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState() {
    return {
      ListData: ListData      
    }
  }


  render(){
    let itens = this.state.ListData;
    return(
      <div>
        {itens.map((item, index) => <Card key={index} card={item} />)}
      </div>
    );
  }
}

export default App;
