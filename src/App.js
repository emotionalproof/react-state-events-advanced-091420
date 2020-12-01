import React from "react";
import "./App.css";
import beyArray from './api';
import BeyContainer from "./Containers/BeyContainer";
import Favorites from "./Containers/Favorites";



//Index importing App
//App
  //should import api 
  //set state
    // api 
//containers: 
  //BeyContainer
    //importing BeyCard
  //Favorites
//api exported as beyArray


//switch to class component X
//import the api X
//have a state value set to the api  X
//passing the api to the two containers X/O
//componentDidMount X


//passing something from app to BeyContainer 
  //pass array from app to container 
  //render <BeyContainer /> and <Favorites />
  //pass the prop 




class App extends React.Component {

  state = {
    beyArray: []
  }

  componentDidMount() {
    //fake fetch
    //.then(resp => resp.json())
    //.then(beyArray => {
    this.setState({
      beyArray: beyArray
    })
  }

  render() {
    // console.log('state:', this.state)
    return (
      <div className="container" >
        <BeyContainer beyArray={this.state.beyArray} />
        <Favorites />
      </div>
    )
  }
}


export default App