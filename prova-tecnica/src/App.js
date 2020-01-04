import React, {Component} from 'react';
import './App.css';

//Importando a Lista
import ListData from './data/lista.json'

class App extends Component{


  render(){
    return(
      <div>
        {ListData.map((item,index)=> {
          return <div>
            <p>{item.id}</p>
            <p>{item.nome}</p>
            <p>{item.email}</p>
          </div>
        })}
      </div>
    );
  }
}

export default App;
