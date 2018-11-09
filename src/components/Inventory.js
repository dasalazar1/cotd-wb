import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <header className="inventory">
        <h2>Fishies</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
        <AddFishForm addFish={this.props.addFish} />
      </header>
    );
  }
}

export default Inventory;
