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
      <section className="list">
        <div className="center">
          <div className="search">
            <p className="search__title">Aqui vai a Pesquisa</p>
          </div>
          <div className="list__wrapper">
            <aside className="sidebar">
              <p>Aqui é a Sidebar</p>
            </aside>
            <div className="list__content">
              {itens.map((item, index) => <Card key={index} card={item} />)}
            </div>
          </div>
        </div>
      </section>
      
    );
  }
}

export default App;
