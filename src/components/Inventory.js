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

  state = {
    uid: null,
    owner: null
  };

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    // 1 Look up the current store in DB
    const store = await base.fetch(this.props.storeId, { context: this });
    // 2 clain if there is now owner
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    // 3 Set inventory to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
    console.log(authData);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    console.log('Logging Out!');
    firebaseApp.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;
    // check if logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    // check if they are the owner of the store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, you are not the owner.</p>
          {logout}
        </div>
      );
    }
    return (
      <header className="inventory">
        <h2>Inventory</h2>
        {logout}
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
