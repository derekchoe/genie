import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';

export default class create_transaction_form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      amount: '',
      description: '',
      date: '',
      typeOfTrans: 'expense',
      focus: false
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
    formData.date = formData.date._d;
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
          <div className="form-date">
            <p>Date</p>
            <SingleDatePicker
              date={this.state.date}
              onDateChange={date =>
                this.setState(
                  // momentPropTypes.momentObj or null
                  { date }
                )
              }
              focused={
                this.state.focused // PropTypes.func.isRequired
              }
              onFocusChange={({ focused }) =>
                this.setState({
                  // PropTypes.bool
                  focused
                })
              }
              id="single-date-picker"
              required={
                true // PropTypes.func.isRequired // PropTypes.string.isRequired,
              }
              numberOfMonths={1}
            />
          </div>

          <label>
            <div className="form-category">
              <p>Category</p>
              <select onChange={this.handleInput('category')}>
                <option selected disabled>
                  please select
                </option>
                {categoryOptions}
              </select>
            </div>
          </label>

          <label onChange={this.handleInput('typeOfTrans')}>
            <div className="form-radio">
              <p>Type</p>
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
            </div>
          </label>

          <label>
            <div className="form-amount">
              <p>Amount</p>
              <input
                type="number"
                value={this.state.amount}
                onChange={this.handleInput('amount')}
              />
            </div>
          </label>
          <label>
            <div className="form-desc">
              <p>Description</p>
              <textarea
                id="text-area"
                value={this.state.description}
                onChange={this.handleInput('description')}
              />
            </div>
          </label>

          <button className="create-button" onClick={this.handleSubmit}>
            Create
          </button>
        </form>
      </div>
    );
  }
}
