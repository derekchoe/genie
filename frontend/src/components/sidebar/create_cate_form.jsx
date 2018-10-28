import React, { Component } from 'react';

export default class CreateCategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      budget: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = Object.assign({}, this.state);
    if (formData.budget !== '') {
      formData.budget = parseInt(formData.budget);
    }
    this.setState({
      name: '',
      description: '',
      budget: ''
    });
    this.props.createCategory(formData);
  }

  render() {
    return (
      <div className="create-form-box-2">
        <h3>Create a new category</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input type="text" required onChange={this.handleInput('name')} />
          </label>

          <label>
            <div className="cate-form-desc">
              <p>Description(optional)</p>
              <input type="text" onChange={this.handleInput('description')} />
            </div>
          </label>

          <label>
            <div className="cate-form-budget">
              <p>Budget(optional)</p>
              <input
                type="number"
                min="0"
                onChange={this.handleInput('budget')}
              />
            </div>
          </label>

          <button className="create-button">Create</button>
        </form>
      </div>
    );
  }
}
