import React, { Component } from 'react';

export default class WebSpeech extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { stream: false };
    this.transcript = '';
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.clearErrors();

    let SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!this.state.stream) {
      this.setState({ stream: true });
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
      this.recognition.maxAlternatives = 1;

      // let text = document.querySelector('.live-text');
      let p = document.getElementById('text-area');
      // let p = document.createElement('p');

      // text.appendChild(p);

      this.recognition.addEventListener('result', e => {
        let transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

        // p.textContent = transcript;
        p.value = transcript;
        
        if (e.results[0].isFinal) {
          // this.transcript += p.textContent + '. ';

          // p = document.createElement('p');
          // text.appendChild(p);
        }
      });

      this.recognition.start();
      this.recognition.addEventListener('end', this.recognition.start);
    } else {
      this.setState({ stream: false });
      this.recognition.stop();
      this.recognition.removeEventListener('end', this.recognition.start);

      this.recognition = null;
      // this.props.createTransaction({
      //     token: this.props.currentUser.token,
      //     transcript: this.transcript
      // })

      this.transcript = '';
      //will clear everything when you stop
      // let children = Array.from(document.querySelectorAll('.live-text > p'));
      // children.forEach(child => {
      //   child.parentNode.removeChild(child);
      // });
    }
  }

  render() {
    let buttonContent = this.state.stream ? 'Stop' : 'Record';
    return (
      <div className="webspeech-box">
        <div className="instruction">Voice record your transactions!</div>
        <div className="live-text">
          <button className="record-button" onClick={this.handleSubmit}>
            {buttonContent}
          </button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
