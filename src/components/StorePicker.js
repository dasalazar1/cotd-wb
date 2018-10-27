import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // Old way of binding goToStore to StorePicker instead of React.Component
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  // myInput and gotoStore arrow are properties of Storepicker. goToStore Function is added to React.Component
  // so explicit binding to StorePicker is necessary
  myInput = React.createRef();

  goToStore = event => {
    // 1) Stop form from submitting
    event.preventDefault();

    // 2) Get the text from that imput
    console.log(this.myInput.value.value);

    // 3) Change the page to '/store/imput'
    this.props.history.push(`/store/${this.myInput.value.value}`);
  };

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>

          <input type="text" required placeholder="Store Name" ref={this.myInput} defaultValue={getFunName()} />
          <button type="submit">Visit Store -></button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
