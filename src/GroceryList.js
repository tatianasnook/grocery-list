import check from './icon-bag.png';
import { Component } from 'react';

export class GroceryList extends Component{
  state = {
    userInput: '',
    groceryList: []
  }
    onChangeEvent(e){
    this.setState({userInput: e})
  }

  addItem(input){
    if(!input){
      alert('Please enter an item.')
    } else {
      let listArray = this.state.groceryList;
      listArray.push(input);
      this.setState({groceryList: listArray, userInput: ''})
    }
  }

  deleteItem(e){
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})
  }

  crossedWord(e){
    const li = e.target;
    li.classList.toggle('crossed')
  }
  onSubmitForm(e){
    e.preventDefault()
  }

  render(){
    return(
      <form onSubmit={this.onSubmitForm}>
        <div className='container'> 
          <input 
            type="text"
            placeholder='What do you want to buy?'
            onChange={(e) => this.onChangeEvent(e.target.value)}
            value={this.state.userInput}
          />
        </div>

        <div className='container'>
          <button onClick={() => this.addItem(this.state.userInput)} className='add'>
            Add
          </button>
        </div>

        <ul>
          {this.state.groceryList.map((item, index) => (
            <li onClick={this.crossedWord} key={index}>
              <img src={check} alt="checkbox" width="40px"/>
              {item}
            </li>
          ))}
        </ul>

        <div className='container'>
            <button onClick={() => this.deleteItem()} className='delete'>
              Delete All
            </button>
        </div>
      </form>
    )
  }
}