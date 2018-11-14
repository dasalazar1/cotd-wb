import React from 'react';
import propTypes from 'prop-types';
import firebase from 'firebase';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base, { firebaseApp } from '../base';

class Inventory extends React.Component {
  static propTypes = {
    fishes: propTypes.object,
    updateFish: propTypes.func,
    deleteFish: propTypes.func,
    loadSampleFishes: propTypes.func
  };

  authHandler = async authData => {
    // 1 Look up the current store in DB
    const store = await base.fetch(this.props.storeId, { context: this });
    // 2 clain if there is now owner
    // 3 Set inventory to reflect the current user
    console.log(authData);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  render() {
    return <Login authenticate={this.authenticate} />;
    return (
      <header className="inventory">
        <h2>Inventory</h2>
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
