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

  getFilterOptions() {
    let emails = [];

    emails = ListData.map(item => item.email)

    const options = emails.map(email => {
      const result = email.split('.')
      return result[result.length - 1]
    })
    return [...new Set(options)]
  }

  changeFilter(event) {  
    const filter = event.target.value  
    if (event ==='')
      return     

    const itens = ListData.filter(item => item.email.includes(filter))
    this.setState({
      ListData: itens    
    })
  }


  render(){
    let itens = this.state.ListData;
    return(
      <section className="list">
        <div className="center">
          <div className="search">
            <h1 className="search__title">Pesquisa</h1>
            <p className="search__description">Selecione o host do email para realizar a filtragem</p>
            <select className="search__select" onChange={(event) => this.changeFilter(event)}>
              <option className="search__option" value="">All</option>
              {this.getFilterOptions().map((item, index) => <option className="search__option" key={index} value={item}>{item}</option>)}
            </select>
          </div>
          <div className="list__wrapper">
            <aside className="sidebar">
              <h2 className="sidebar__title">Acesso Rápido</h2>
              <ul className="sidebar__lista">
                <li className="sidebar__item">
                  <input className="sidebar__radio" value="" type="radio" id="all" name="sidebar" onChange={(event) => this.changeFilter(event)}/>
                  <label for="all" className="sidebar__label">All</label>
                </li>
                {this.getFilterOptions().map((item, index) => 
                  <li className="sidebar__item" key={index} >
                    <input className="sidebar__radio" type="radio" key={index} value={item} id={item} name="sidebar" onChange={(event) => this.changeFilter(event)}/>
                    <label for={item} className="sidebar__label">{item}</label>
                  </li>
                )}
              </ul>
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
