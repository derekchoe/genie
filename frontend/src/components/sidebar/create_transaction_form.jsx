import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import Modal from 'react-modal';

const statusStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class create_transaction_form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: {
        category: '',
        amount: '',
        description: '',
        date: null,
        typeOfTrans: 'expense'
      },
      category: { name: '', description: '', budget: '' },
      createCateModalOpen: false,
      focused: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCateInput = this.handleCateInput.bind(this);
    this.closeCreateCateModal = this.closeCreateCateModal.bind(this);
    this.handleCateSubmit = this.handleCateSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleInput(field) {
    return e =>
      this.setState({
        transaction: Object.assign({}, this.state.transaction, {
          [field]: e.target.value
        })
      });
  }

  handleSelect(e) {
    if (e.target.value === 'add new category...') {
      this.openCreateCateModal();
    } else {
      this.setState({
        transaction: Object.assign({}, this.state.transaction, {
          ['category']: e.target.value
        })
      });
    }
  }

  handleSubmit(e) {
    let formData = {};
    formData = Object.assign({}, this.state.transaction);
    delete formData['createCateModalOpen'];
    formData.categoryName = this.props.categories[
      parseInt(formData.category)
    ].name;
    formData.category = this.props.categories[parseInt(formData.category)]._id;
    formData.date = formData.date._d;
    this.props.createTransaction(formData);
  }

  radioCheck(field) {
    return field === this.state.transaction.typeOfTrans;
  }

  handleRadioChange(e) {
    this.setState({
      transaction: Object.assign({}, this.state.transaction, {
        ['typeOfTrans']: e.target.value
      })
    });
  }

  handleAddCategory(e) {
    this.openCreateCateModal();
  }

  handleCateInput(field) {
    return e => {
      this.setState({
        category: Object.assign({}, this.state.category, {
          [field]: e.target.value
        })
      });
    };
  }

  handleCateSubmit(e) {
    e.preventDefault();
    let formData = Object.assign({}, this.state.category);
    if (formData.budget !== '') {
      formData.budget = parseInt(formData.budget);
    }
    this.setState({
      name: '',
      description: '',
      budget: ''
    });

    const createPromise = new Promise((resolve, reject) => {
      resolve(this.props.createCategory(formData));
    });
    createPromise.then(() => {
      this.closeCreateCateModal();
    });
  }

  handleCalendarDate(date) {
    this.setState({
      transaction: Object.assign({}, this.state.transaction, {
        ['date']: date
      })
    });
  }

  openCreateCateModal() {
    this.setState({ createCateModalOpen: true });
  }

  closeCreateCateModal() {
    this.setState({ createCateModalOpen: false });
  }

  render() {
    const categoryOptions = this.props.categories.map((category, idx) => (
      <option key={category._id} value={idx}>
        {category.name}
      </option>
    ));

    return (
      <div className="create-form-box">
        <Modal
          isOpen={this.state.createCateModalOpen}
          onRequestClose={this.closeCreateCateModal}
          contentLabel="Success Modal"
          style={statusStyle}
        >
          <div id="create-cate-modal">
            <h3>Create a new category</h3>
            <form onSubmit={this.handleCateSubmit}>
              <label>
                <div className="cate-form-name">
                  <p>Name</p>
                  <input
                    type="text"
                    required
                    onChange={this.handleCateInput('name')}
                  />
                </div>
              </label>

              <label>
                <div className="cate-form-budget">
                  <p>Budget</p>
                  <input
                    type="number"
                    min="0"
                    onChange={this.handleCateInput('budget')}
                  />
                </div>
              </label>

              <label>
                <div className="cate-form-budget">
                  <p>Description</p>
                  <textarea onChange={this.handleCateInput('description')} />
                </div>
              </label>

              <button className="create-button">Create</button>
            </form>
          </div>
        </Modal>

        <h3>Record a new transaction</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-date">
            <p>Date</p>
            <SingleDatePicker
              date={this.state.transaction.date}
              onDateChange={date => this.handleCalendarDate(date)}
              focused={this.state.focused}
              onFocusChange={({ focused }) => this.setState({ focused })}
              id="single-date-picker"
              required={true}
              numberOfMonths={1}
              required={true}
              hideKeyboardShortcutsPanel={true}
              isOutsideRange={() => false}
            />
          </div>

          <label>
            <div className="form-category">
              <p>Category</p>
              <select required onChange={this.handleSelect}>
                <option value="" selected="selected" disabled>
                  please select
                </option>
                {categoryOptions}
                <option>add new category...</option>
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
            <div className="form-amount form-div">
              <p>Amount</p>
              <input
                type="number"
                value={this.state.transaction.amount}
                onChange={this.handleInput('amount')}
                defaultValue="0"
                min="0"
                required
              />
            </div>
          </label>
          <label>
            <div className="form-desc form-div">
              <p>Description</p>
              <textarea
                id="text-area"
                value={this.state.transaction.description}
                onChange={this.handleInput('description')}
                required
              />
            </div>
          </label>

          <button className="create-button">Create</button>
        </form>
      </div>
    );
  }
}
