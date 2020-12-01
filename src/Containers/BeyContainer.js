import React from "react";
import BeyCard from '../Components/BeyCard'

//map over array and make them into bey obj 
//pass each object down to bey card

class BeyContainer extends React.Component {
  renderBeys = () => {
    return this.props.beyArray.map((beyObj) => <BeyCard key={beyObj.id} beyObj={beyObj}/>)
  }

  render() {
    console.log(this.props.beyArray)

    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBeys()}
      </div>
    );
  }
}

export default BeyContainer;
