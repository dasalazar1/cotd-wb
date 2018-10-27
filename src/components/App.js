import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // take a copy of existing state
    const fishes = { ...this.state.fishes };
    // add new fish to fishes var
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({
      fishes: fishes // if thay are the same name then just  {fishes} is okay
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market!" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
