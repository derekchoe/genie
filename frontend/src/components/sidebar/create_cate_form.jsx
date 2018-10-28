import React, { Component } from 'react';
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

export default class CreateCategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      budget: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openSuccessModal = this.openSuccessModal.bind(this);
    this.closeSuccessModal = this.closeSuccessModal.bind(this);
  }

  openSuccessModal() {
    this.setState({ successModalOpen: true });
  }

  closeSuccessModal() {
    this.setState({ successModalOpen: false });
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
    // this.props.createCategory(formData);

    const createPromise = new Promise((resolve, reject) => {
      resolve(this.props.createCategory(formData));
    });
    createPromise.then(() => {
      this.openSuccessModal();
      setTimeout(this.closeSuccessModal, 1000);
    });
  }

  render() {
    return (
      <div className="create-form-box-2">
        <Modal
          isOpen={this.state.successModalOpen}
          onRequestClose={this.closeSuccessModal}
          contentLabel="Success Modal"
          style={statusStyle}
        >
          <div className="success-modal mod-positive">
            New category has been added!
          </div>
        </Modal>

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
