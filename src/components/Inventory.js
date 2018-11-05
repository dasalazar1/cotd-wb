import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <header className="inventory">
        <h2>Fishies</h2>
        <AddFishForm addFish={this.props.addFish} />
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm key={key} fish={this.props.fishes[key]} />
        ))}
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </header>
    );
  }
}

export default Inventory;
