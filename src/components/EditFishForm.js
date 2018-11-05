import React from 'react';

class EditFishForm extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    // update local fish
    // create a copy
    const updatedFish = {
      ...this.props.fish,
      [this.currentTarget.name]: this.currentTarget.value
    };
    // event.currentTarget.Name is the name field in the inputs
  };
  render() {
    return (
      <React.Fragment>
        <div className="fish-edit">
          <input
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.props.fish.name}
          />
          <input
            name="price"
            type="text"
            onChange={this.handleChange}
            value={this.props.fish.price}
          />
          <select
            name="status"
            type="text"
            onChange={this.handleChange}
            value={this.props.fish.status}
          >
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!!</option>
          </select>
          <textarea
            name="desc"
            onChange={this.handleChange}
            value={this.props.fish.desc}
          />
          <input
            name="image"
            type="text"
            onChange={this.handleChange}
            value={this.props.fish.image}
          />
          <button type="submit">+ Add Fish</button>
        </div>
      </React.Fragment>
    );
  }
}

export default EditFishForm;
