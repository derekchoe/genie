import React, { Component } from 'react';
import { throws } from 'assert';

export default class create_transaction_form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      amount: '',
      description: '',
      date: '',
      typeOfTrans: 'expense'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleInput(field) {
    // if (field === 'category') {
    //   return e =>
    //     this.setState({
    //       ['category']: e.target.value
    //     });
    // }
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    let formData = Object.assign({}, this.state);
    formData.category = this.props.categories[parseInt(formData.category)]._id;
    formData.categoryName = this.props.categories[
      parseInt(formData.category)
    ].name;
    debugger;

    this.props.createTransaction(formData);
  }

  radioCheck(field) {
    return field === this.state.typeOfTrans;
  }

  handleRadioChange(e) {
    this.setState({ typeOfTrans: e.target.value });
  }

  render() {
    const categoryOptions = this.props.categories.map((category, idx) => (
      <option value={idx}>{category.name}</option>
    ));

    return (
      <div className="create-form-box">
        <form>
          <label>
            <p>Date</p>
            <input
              type="date"
              value={this.state.date}
              onChange={this.handleInput('date')}
            />
          </label>

          <label>
            <p>Category</p>
            <select onChange={this.handleInput('category')}>
              <option selected disabled>
                please select
              </option>
              {categoryOptions}
            </select>
          </label>

          <label onChange={this.handleInput('typeOfTrans')}>
            <input
              type="radio"
              name="income"
              value="income"
              checked={this.radioCheck('income')}
              onChange={this.handleRadioChange}
            />
            Income
            <input
              type="radio"
              name="expense"
              value="expense"
              checked={this.radioCheck('expense')}
              onChange={this.handleRadioChange}
            />
            Expense
          </label>

          <label>
            <p>Description</p>
            <textarea
              value={this.state.description}
              onChange={this.handleInput('description')}
            />
          </label>

          <label>
            <p>Amount</p>
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleInput('amount')}
            />
          </label>

          <p className="create-button" onClick={this.handleSubmit}>
            Create
          </p>
        </form>
      </div>
    );
  }
}
